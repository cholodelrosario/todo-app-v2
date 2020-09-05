<template>
    <b-container class="align-center p-4 todo-container" fluid="md">
        <div>
        <div v-if="isEdit == false">
            <h1 class="text-info mt-4 edit-text" v-show="returnCurrentProject"  @dblclick="isEdit = true">{{returnCurrentProject.title}}</h1>
        </div>
        <b-form-textarea v-else size="md" v-model="returnCurrentProject.title" class="form-control mb-2" @keyup.enter="onEnterList" autofocus/> 
        <b-button 
            variant="light" 
            size="sm" 
            v-clipboard="returnCurrentProject.project_id.toString()"
            @click="doToast('success','You can now let you teammates join the projects.','Copied Project ID')"
        >
        Copy Project ID
        </b-button>
        </div>
        <AddTodo/>
        <Todos/>
    </b-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_REQUEST } from "../store/actions/user";
import Todos from '../components/Todos'
import AddTodo from '../components/AddTodo'
import axios from 'axios'
import lodash from 'lodash'

export default {
    components:{
        Todos,
        AddTodo
    },
    created(){
        this.getUser()
        this.fetchList()
        this.doToast('info', 'If Page is not Loading, Please refresh the page' , 'Important')
    },
    data(){
        return {
            isEdit: false,
            userprofile: null,
            token: localStorage.getItem("user-token") || ""
        }
    },
    computed: {
        ...mapGetters(['getProjects','getProfile','getProject']),
        returnCurrentProject(){
            try {
                if(this.userprofile !== null &&this.userprofile.isMember == 1){
                    let id = this.userprofile.id
                    let projects_list = this.getProjects
                    try {
                        if(id){
                            let projects = projects_list.filter(a=>{
                                if(a.member_id !== null){
                                    let members = a.member_id.split(',')
                                    if(lodash.includes(members,id.toString())){
                                        return a
                                    }
                                }
                            })[0]
                            console.log(projects,'s')
                            return projects
                        } else {
                            this.doToast('warning', 'Please refresh the page' , 'Project Loading Error')
                            return false
                        }                
                    } catch (error) {
                        this.doToast('warning', 'Please refresh the page' , 'Project Loading Error')
                        return false
                    }                
                } else {
                    let id = this.userprofile.id
                    let projects_list = this.getProjects
                    try {
                        if(id){
                            let projects = projects_list.filter(a=>{
                                return a.owner_id == id
                            })[0]
                            // console.log(projects,'s')
                            return projects
                        } else {
                            return false
                        }                
                    } catch (error) {
                        this.doToast('warning', 'Please refresh the page' , 'Project Loading Error')
                        return false
                    }
                }                
            } catch (error) {
                console.log(error,'error')
                return false
            }
        }
    },
    methods:{
        ...mapActions(['fetchProjects','SaveProjectToState']),
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
                this.userprofile = resp.data.user
                console.log(resp.data.user, 'USER_PROFILE')
            }).catch(error =>{
                return false
                console.log(error,'getUser')
                this.doToast('danger','Please refresh and try again.','Login Error')
                this.show = false                   
            }) 
        },
        async fetchList(){
            let id = this.getProfile.user.id
            // console.log(id,'id')
            if(id){
                await this.fetchProjects()
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
        async onEnterList(e){
            let project = this.getProject
            // console.log(project)
            // console.log(e.target.value,'new title')
            if(project == undefined){
                console.log('problem state')
            } else {
                try {
                    project.title = e.target.value
                    let res = await axios.put(`http://localhost:8000/api/projects/${project.id}`,project,
                    {headers: {
                        'Content-Type' : 'application/json',
                        'Accept' : 'application/json'
                    }})
                    // console.log(res,'res')
                    this.isEdit = false
                    await this.SaveProjectToState(res.data)
                } catch (error) {
                    console.log(error,'error in put')
                }
                
            }

        }
    }
}
</script>
<style scoped>
    .edit-text{
        cursor: pointer;
    }
    .todo-container{
        width: 40%;
    }
    @media only screen and (max-width: 960px) {
        .todo-container{
            width: 75%;
        }
    }

    @media only screen and (max-width: 600px) {
        .todo-container{
            width: 100%;
        }
    }   

</style>