<template>
        <b-container class="align-center p-5 join-container" fluid="md">
            <form class="align-center mt-4" @submit="onSubmit">
                <h1 class="text-info">Good day :)</h1>
                <h3 class="mb-5">Are you ready to join in?</h3>
                <div class="form-group">
                    <label>Your Nickname</label>
                    <input type="text" class="form-control" v-model="user_name">
                </div>
                <div class="form-group mb-5">
                    <label>Enter Project ID</label>
                    <input type="text" class="form-control" v-model="project_code">
                </div>
                <button type="submit" class="btn btn-info mr-2">Join Project
                    <b-icon icon="arrow-right-circle"></b-icon>
                </button>
                <b-button variant="light" to="/startproject">No, Create my own project.</b-button>
            </form>
        </b-container>
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
            project_code: ''
        }
    },
    created(){
        this.getUser()
        this.fetchProjects()
    },
    computed:{
        ...mapGetters(['getProjects','isExist','getProfile']),
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
                if(this.user_name !== '' && this.project_code !== ''){
                    let response = await axios.put(`http://localhost:8000/api/users/${id}`,
                    { name: this.user_name, isMember: 1 },{
                        headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        }
                    });

                    console.log(response,'response')
                    this.$store.dispatch(USER_REQUEST)
                    setTimeout(() => this.updateProject(), 3000);
                    
                } else {
                    this.doToast('warning', 'Name & Project Code is required.' , 'Please fill up the form')
                    this.show = false
                }                
            } catch (error) {
                console.log(error,'updateUser')
            }
        },
        async updateProject(){
            let id = this.getProfile.user.id
            let projects = this.getProjects
            console.log(id,'id')
            if(projects.length > 0){
                let filter = projects.filter(a=> { return a.project_id == this.project_code})[0]
                console.log(filter,'filter')
                if(filter == undefined || filter == null){
                    this.doToast('warning', 'Project Does not Exist' , 'Please Try Again')
                    return
                } else {
                    try {
                        if(this.project_code !== ''){
                            let members = filter.member_id == null || filter.member_id == ''  ? '' : filter.member_id
                            let ids = `${id.toString()},${members}`
                            let response = await axios.put(`http://localhost:8000/api/projects/${filter.id}`,
                            { 
                                member_id: ids.trim()
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
                        console.log(error,'updateProject')
                    }
                }
            }


        },
        async getUser(){
            await this.$store.dispatch(USER_REQUEST)
        },
    }
}
</script>
<style scoped>
    .join-container{
        width: 40%;
    }
    @media only screen and (max-width: 900px) {
        .join-container{
            width: 75%;
        }
    }

    @media only screen and (max-width: 600px) {
        .join-container{
            width: 100%;
        }
    }

</style>