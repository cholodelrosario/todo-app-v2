<template>
    <b-overlay :show="show" rounded="sm">
        <b-container class="align-center p-5 login-container" fluid="md">
            <b-img src="/images/Login.svg" fluid alt="Responsive image" width="400"></b-img>
            <form class="align-center mt-4" @submit="onSubmit">
                <h1 class="text-info">Good day!</h1>
                <h3 class="mb-3">Ready to do some work? Login here.</h3>
                <div class="form-group">
                    <label >Email address</label>
                    <input type="email" class="form-control" v-model="email">
                </div>
                <div class="form-group mb-4">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" v-model="password">
                </div>
                <button type="submit" class="btn btn-info mr-2">Login 
                    <b-icon icon="arrow-right-circle"></b-icon>
                </button>
                
                <router-link to="/">
                <b-button variant="light">Don't have a account? Click here to register.</b-button>
                </router-link>
            </form>
        </b-container>
    </b-overlay>
</template>
<script>
import axios from 'axios'
import lodash from 'lodash'
import { AUTH_REQUEST } from "../store/actions/auth";
import { USER_REQUEST } from "../store/actions/user";
import { mapActions, mapGetters, mapState } from 'vuex';


export default {
    data() {
         return {
             email: 'sample@email.com',
             password: '123456',
             show: false,
             userprofile: null,
             projectlist: [],
             token: localStorage.getItem("user-token") || ""
         }
    },
    computed: {
        ...mapGetters(['getProfile'])
    },
    created(){ 
        if(localStorage.getItem("user-token") !== null){
            localStorage.removeItem("user-token")
        }
        this.doToast('info', 'Please refresh the page, after logout.' , 'Important')
    },
    methods: {
        ...mapActions(['SaveProjectToState','CheckIfProjectExist','fetchProjects']),
        onSubmit(e){
            e.preventDefault();
            this.login()
        },
        login: async function () {
            const { email, password } = this
            this.show = true
            try {
                console.log({email,password},'asd')
                await this.$store.dispatch(AUTH_REQUEST, { email, password })
                .then((res) => {
                    console.log(res,'finished dispatch')
                    this.token = res.data.token
                    console.log(this.token,'GOTCHA TOKEN')
                    localStorage.setItem("user-token", res.data.token);
                    setTimeout(() => this.getProjectList(), 1000);
                    // this.$router.push('/startproject')
                }).catch(err=>{
                    console.log(err,'login')
                    this.doToast('danger','Please refresh and try again.','Login Error')
                    this.show = false                     
                })             
            } catch (error) {
                console.log(error,'login')
                this.doToast('danger','Please refresh and try again.','Login Error')
                this.show = false                
            }

        },

        async getProjectList(){
            try {
                await axios.get(`http://localhost:8000/api/projects/`)
                .then(resp =>{
                    console.log(resp,'data projects')
                    this.projectlist = resp.data
                    // this.fetchProjects()
                    setTimeout(() => this.getUser(), 1000);
                }).catch(error=>{
                    console.log(error,'getProjectList')
                    this.doToast('danger','Please refresh and try again.','Login Error')
                    this.show = false                   
                })                
            } catch (error) {
                console.log(error,'login')
                this.doToast('danger','Please refresh and try again.','Login Error')
                this.show = false    
            }

        },
        async getUser(){
            await axios.get("http://localhost:8000/api/me",{
            headers:{
                'Authorization' : `Bearer ${this.token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                }
            })
            .then(resp => {
                console.log(resp,'data user')
                this.userprofile = resp.data
                console.log(resp.data.user, 'USER_PROFILE')
                // this.$store.dispatch(USER_REQUEST)
                setTimeout(() =>this.checkIfProjectIsAvailable(), 2000);
            }).catch(error =>{
                console.log(error,'getUser')
                this.doToast('danger','Please refresh and try again.','Login Error')
                this.show = false                   
            }) 
        },
        async checkIfProjectIsAvailable(){
            try {
                let projects = this.projectlist
                console.log('got projects',projects)
                if(this.userprofile !== null){
                    if(this.userprofile.user.isMember == 1){
                        let id = this.userprofile.user.id
                        try {
                            if(id){
                                let project = projects.filter(a=>{
                                    if(a.member_id !== null){
                                        let members = a.member_id.split(',')
                                        console.log(members,'memberidarray')
                                        if(lodash.includes(members,id.toString())){
                                            return a
                                        }
                                    }
                                })[0]
                                
                                console.log(project,'project')
                                if(project !== undefined){
                                    await this.CheckIfProjectExist(true)
                                    this.show = false
                                    this.$router.push('/todolist')
                                } else {
                                    this.show = false
                                    this.doToast('warning', 'Please refresh the page' , 'Login Error')
                                }

                            } else {
                                return false
                            }                
                        } catch (error) {
                            console.log(error,'member err')
                            this.doToast('warning', 'Please refresh the page' , 'Login Error')
                            return false
                        }                
                    } else {                

                        let owner_id = this.userprofile.user.id
                        console.log('got id',owner_id)
                        let index = lodash.findIndex(projects,a=>{
                            return a.owner_id == owner_id
                        })

                        let exist = false
                        if(index > -1){
                            exist = true
                        }

                        await this.CheckIfProjectExist(exist)
                        if(exist){
                            this.show = false
                            this.$router.push('/todolist')
                        } else {
                            this.show = false
                            this.$router.push('/startproject')
                        }    
                    }   
                }

         
            } catch (error) {
                console.log(error,'checkIfProjectIsAvailable')
                this.doToast('danger','Please refresh and try again.','Login Error')
                this.show = false
            }

        },
        doToast(variant = null,message = '',title='',to = null,) {
            this.$bvToast.toast(message, {
            title: title,
            variant: variant,
            solid: true,
            to: to
            })
        },
    },
    }
</script>
<style scoped>
    .login-container{
        width: 40%;
    }
    @media only screen and (max-width: 900px) {
        .login-container{
            width: 75%;
        }
    }

    @media only screen and (max-width: 600px) {
        .login-container{
            width: 100%;
        }
    }

</style>