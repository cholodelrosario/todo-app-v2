<template>
    <div class="form-group my-5">
        <b-alert :show="error" dismissible fade variant="warning">
            Input is empty. Please type something below.
        </b-alert>
        <b-input-group size="md">
            <b-form-input type="text" v-model="title" ref="todo" class="mb-2" placeholder="Enter New Todo" @keyup.enter="onEnter"/>
            <template v-slot:append>
            <b-form-select size="md" v-model="selected" :options="returnUserOptions" @change="$refs.todo.focus()" :disabled="disabled"></b-form-select>
            </template>
        </b-input-group>
        <small class="text-success float-right" v-if="inputState">Added !</small>
        <small class="text-muted float-right" v-else>Hit <b>Enter</b> in the <b>textbox</b> to add new Todo</small>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
import lodash from 'lodash'
export default {
    name: 'AddTodo',
    data(){
        return {
            title: '',
            inputState: false,
            error: false,
            selected: 1,
            usersForChecking: [],
            disabled: false,
        }
    },
    created(){
        this.getAllUsers()
        this.checkIfMember()
    },
    computed: {
        ...mapGetters(['getProject','getProfile']),
        returnUserOptions(){
            try {
                let project = this.getProject
                let members = project.member_id !== null ? project.member_id.split(',') : []
                if(this.disabled){
                    let index = lodash.findIndex(members,a=> {return a == this.getProfile.user.id.toString()})
                    console.log(index,'index')
                    this.selected = index+2
                    return [{
                        value: index+2, text: this.getProfile.user.name
                    }]
                } else {
                    let users = this.getNames([...project.owner_id,...members]) 
                    return users.map(a=>{
                        return {
                            value: a.userId, text: a.name
                        }
                    })     
                }
            } catch (error) {
                console.log(error,'get users')
                return []
            }
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        onEnter(){
            if(this.title !== ''){
                let payload = {title:this.title,userId : this.selected}
                this.addTodo(payload)
                this.inputState = true
                this.title= ''
                setTimeout(() => {    
                    this.inputState = false
                }, 3000);
            } else {
                this.error = true
                setTimeout(() => {    
                    this.error = false
                }, 3000);  
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
        checkIfMember(){
            if(this.getProfile.user.isMember == 1){
                this.disabled = true
            }
        }
    }
}
</script>