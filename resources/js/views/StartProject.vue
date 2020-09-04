<template>
    <b-overlay :show="show" rounded="sm">
        <b-container class="align-center p-5 start-container" fluid="md">
            <form class="align-center mt-4" @submit="onSubmit">
                <h1 class="text-info">Good day :)</h1>
                <h3 class="mb-5">Please tell me how we should call you and the name of your new project.</h3>
                <div class="form-group">
                    <label>Your Nickname</label>
                    <input type="text" class="form-control" v-model="user_name">
                </div>
                <div class="form-group mb-5">
                    <label>New Project Title</label>
                    <input type="text" class="form-control" v-model="project_title">
                </div>
                <button type="submit" class="btn btn-info mr-2">Finish Setup
                    <b-icon icon="arrow-right-circle"></b-icon>
                </button>
                <b-button variant="light" to="/joinproject">I'll join another project</b-button>
            </form>
        </b-container>
    </b-overlay>
</template>
<script>
import { USER_REQUEST } from "../store/actions/user";
import axios from 'axios';
import lodash from 'lodash';
import { mapState, mapGetters, mapActions } from "vuex";
var sri = require('simple-random-id');
export default {
    data(){
        return {
            user_name: '',
            project_title: '',
            show: false,
        }
    },
    computed: {
        ...mapGetters(['getProjects','isExist','getProfile']),
    },
    created(){
        this.getUser()
    },
    methods:{
        ...mapActions(['SaveProjectToState','CheckIfProjectExist','fetchProjects']),
        onSubmit(e){
            e.preventDefault();
            this.show = true
            this.updateUser()


            console.log('finished')
        },
        doToast(variant = null,message = '',title='',to = null,) {
            this.$bvToast.toast(message, {
            title: title,
            variant: variant,
            solid: true,
            to: to
            })
        },
        async updateUser(){
            let id = this.getProfile.user.id
            try {
                if(this.user_name !== '' && this.project_title !== ''){
                    let response = await axios.put(`http://localhost:8000/api/users/${id}`,
                    { name: this.user_name },{
                        headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        }
                    });

                    console.log(response,'response')
                    this.$store.dispatch(USER_REQUEST)
                    setTimeout(() => this.createProject(), 3000);
                    
                } else {
                    this.doToast('warning', 'Name & Project Title is required.' , 'Please fill up the form')
                    this.show = false
                }                
            } catch (error) {
                console.log(error,'updateUser')
                this.doToast('danger','Please refresh and try again.','Update Error')
                this.show = false   
            }
        },
        async createProject(){
            let id = this.getProfile.user.id
            console.log(id,'profile id')
            try {
                if(this.project_title !== ''){
                    let response = await axios.post(`http://localhost:8000/api/projects`,
                    { 
                        project_id: sri(),
                        title: this.project_title,
                        owner_id: id,
                    },
                    {
                        headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        }
                    });
                    this.SaveProjectToState(response.data)
                    console.log(response,'response')
                    setTimeout(
                        this.$router.push('/todolist')
                    , 3000);
                    
                } else {
                    this.doToast('warning', 'Project Title is required.' , 'Please fill up the form')
                    this.show = false
                }                 
            } catch (error) {
                console.log(error,'createProject')
                this.doToast('danger','Please refresh and try again.','Create Error')
                this.show = false   
            }
        },
        async getUser(){
            await this.$store.dispatch(USER_REQUEST)
        },
     
    }
}
</script>
<style scoped>
    .start-container{
        width: 40%;
    }
    @media only screen and (max-width: 900px) {
        .start-container{
            width: 75%;
        }
    }

    @media only screen and (max-width: 600px) {
        .start-container{
            width: 100%;
        }
    }

</style>