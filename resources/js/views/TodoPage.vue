<template>
    <b-container class="align-center p-4 todo-container" fluid="md">
        <h1 class="text-info mt-4" v-show="filterView">
        <b-button variant="dark" size="sm" @click="$router.go(-1)">Back</b-button>  {{filterView.title}}</h1>
        <small class="text-muted">#{{ $route.params.id }}</small>
        <b-list-group class="mt-4">
            <b-list-group-item class="d-flex justify-content-between align-items-center">
               <span>Assign to <b>{{filterView.userprofile.name}}</b></span>  
               <b-badge :variant="filterView.complete ? 'primary' : 'warning'" pill>{{filterView.complete ? 'Completed' : 'Pending'}}</b-badge>
            </b-list-group-item>
        </b-list-group>

    </b-container>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['todos']),
        filterView(){
            let checklocal = JSON.parse(localStorage.getItem("viewTodo"))
            // console.log(checklocal,'local')
            let list = this.todos.todos
            let filter = list.filter(a=> {return this.$route.params.id == a.sri})[0]
            localStorage.setItem('viewTodo',filter)
            return checklocal !== undefined ? checklocal : filter
        }
    },
    created(){
        if(this.todos.todos.length == 0) { this.$router.push('/todolist') }
    }
}
</script>
<style scoped>
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