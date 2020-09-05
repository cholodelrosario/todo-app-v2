<template>
<b-overlay :show="show" rounded="sm">
    <b-form-select size="md" v-model="filter" class="mb-3" :options="['Recent','Completed','Pending']" ></b-form-select>
    <b-list-group>
    <b-list-group-item 
        v-for="(todo,indx) in returnMapped" 
        :key="todo.sri" 
        class="flex-column align-items-start edit-text" 
        :actions="true"
        @dblclick="goToTask(todo)"
    >
        <div v-if="isEdit == todo.sri">
            <b-form-textarea size="md" v-model="todo.title" class="form-control mb-2" @keyup.enter="onEnterList" autofocus/> 
            <small class="text-muted float-right">Hit Enter to Saved Changes</small>
        </div>
        <div v-else>
            <b-overlay
                :show="busy && isDelete == todo.sri"
                opacity="0.6"
                spinner-small
                spinner-variant="primary"
            >
            <div ref="todo">
                <div class="d-flex w-100 justify-content-between" >
                    <b-form-checkbox size="lg" v-model="todo.completed" class="mr-4 float-left text-info" @change="event => statusChange(event,todo,indx)"/> 
                    <h5 class="mb-1" @click="EditTodo(todo.sri,indx,todo)">{{todo.title}}  
                        <b-button size="sm" class="ml-2 float-right" variant="link" @click="deleteLoading(todo.id,todo.sri)">
                            <b-icon icon="trash" variant="warning"/>
                        </b-button>
                    </h5>  
                </div>
                <small class="float-right text-muted " v-if="todo.userId">Assigned to {{todo.userprofile.name}}</small> 
            </div>
            </b-overlay>
        </div>
        
    </b-list-group-item>

    </b-list-group>
</b-overlay>
</template>
<script>

import { mapGetters, mapActions, mapState } from 'vuex'
var sri = require('simple-random-id');
import axios from 'axios'
import lodash from 'lodash'

export default {
    name: 'Todos',
    data(){
        return {
            filter: 'Recent',
            show: false,
            selectedEditTodo: null,
            selectedEditTodoIndex: null,
            isEdit: null,
            newTodoTitle: '',
            todoEditId: '',
            pagination: {},
            isHovered: null,
            busy: false,
            timeout: null,
            isDelete: null,
            usersForChecking: []
        }
    },
    beforeDestroy() {
      this.clearTimeout()
    },
    created(){
        this.show = true
        if(this.allTodos.length == 0 ){
            this.fetchTodos()
        }
        this.fetchProjects()
        this.setProject()
        this.getAllUsers()
        this.show = false
    },
    computed: {
        ...mapGetters(['allTodos','getProfile','getProjects','getProject']),
        ...mapState(['projects','todos']),
        returnMapped(){
            try {
                let todos = this.allTodos
                let values
                // console.log(todos.map(a=> {return {...a,userprofile: this.returnUserDataToTodo(a.userId)}}),'yes mapped')
                if(this.filter == 'Recent'){
                    values = todos.map(a=>{
                        return {...a,userprofile: this.returnUserDataToTodo(a.userId)}
                    })
                } else if (this.filter == 'Completed'){
                    values = lodash.orderBy(todos.map(a=>{
                        return {...a,userprofile: this.returnUserDataToTodo(a.userId)}
                    }),'completed','desc') 
                } else {
                    values = lodash.orderBy(todos.map(a=>{
                        return {...a,userprofile: this.returnUserDataToTodo(a.userId)}
                    }),'completed','asc')     
                }
               return values
            } catch (error) {
                console.log('returnMapped',error)
                return []
            }
        }
    },
    methods:{
        ...mapActions(['fetchTodos','deleteTodo','updateTodo','SaveProjectToState','fetchProjects']),
        deleteLoading(id,sri){
            this.busy = true
            this.isDelete = sri
            this.deleteTodo(sri)
            // Simulate an async request
            this.setTimeout(() => {
                this.busy = false
                this.isDelete = null
            })
        },
        setTimeout(callback) {
            this.clearTimeout()
            this.timeout = setTimeout(() => {
            this.clearTimeout()
            callback()
            }, 2000)
        },
        clearTimeout() {
            if (this.timeout) {
            clearTimeout(this.timeout)
            this.timeout = null
            }
        },
        async onEnterList(e){
            try {
                // console.log(e.target.value,'e')
                let todo = {...this.selectedEditTodo}
                todo.title = e.target.value
                await this.updateTodo(this.selectedEditTodoIndex,todo)
                this.isEdit = false
                // console.log('saved')               
            } catch (error) {
                console.log(error,'onEnter')
            }
        },
        EditTodo(id,index,todo){
            this.isEdit = id
            this.selectedEditTodo = todo
            this.selectedEditTodoIndex = index
        },
        async statusChange(e,todo,indx){
            todo.completed = e
            await this.updateTodo(indx,todo)
            // console.log('update success')
        },
        goToTask(todo){
            localStorage.setItem('viewTodo',JSON.stringify(todo))
            this.$router.push(`/todopage/${todo.sri}`)
        },
        async setProject(){
            let id = this.getProfile.user.id
            let projects_list = this.getProjects
            try {
                if(this.getProfile.user.isMember == 1){
                    let projects = projects_list.filter(a=>{
                        let members = a.member_id.split(',')
                        if(lodash.includes(members,id.toString())){
                            return a
                        }
                    })[0]
                    console.log(projects,'s')
                    await this.SaveProjectToState(projects)                    
                } else {
                    if(id){
                        let projects = projects_list.filter(a=>{
                            return a.owner_id == id
                        })[0]

                        await this.SaveProjectToState(projects)
                    }
                }
            } catch (error) {
                console.log(error,'error')
            }
        },
        async getAllUsers(){
            try {
                let res = await axios.get('http://localhost:8000/api/users')  
                this.usersForChecking = res.data
            } catch (error) {
                console.log(error,'error')
            }
        },
        getNames(array){
            let users = []
            let userids = 1
            array.forEach(a=>{
                this.usersForChecking.forEach(b=>{
                    if(a == b.id){
                        b.userId = userids
                        users.push(b)
                        userids = userids + 1
                    }
                })
            })
            return users
        },
        returnUserDataToTodo(userId){
            let project = this.getProject
            let members = project.member_id !== null ? project.member_id.split(',') : []
            let users = this.getNames([...project.owner_id,...members]) 
            return users.filter(a=> a.userId == userId)[0]           
        }

    }
}
</script>
<style scoped>
    .delete-action{
        top:0;
        right:0;
    }
    .edit-text{
        cursor: pointer;
    }

</style>