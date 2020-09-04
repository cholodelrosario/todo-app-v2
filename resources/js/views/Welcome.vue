<template>
    <b-overlay :show="show" rounded="sm">
        <b-container class="align-center p-5 welcome-container" fluid="md">
            <b-img src="/images/Checklist.svg" fluid alt="Responsive image" width="350"></b-img>
            <form class="align-center mt-4" @submit="onSubmit">
                <h1 class="text-info">Welcome to Todo App V2</h1>
                <h3 class="mb-3">Please register to use to app.</h3>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" v-model="email">
                </div>
                <div class="form-group mb-4">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" v-model="password">
                </div>
                <button type="submit" class="btn btn-info mr-2">
                    Submit
                    <b-icon icon="arrow-right-circle"></b-icon>
                </button>
                <router-link to="/login">
                <b-button variant="light">Have a account? Click here to login</b-button>
                </router-link>
            </form>
        </b-container>
    </b-overlay>
</template>
<script>
import axios from 'axios'
import { AUTH_REQUEST } from "../store/actions/auth";
import { USER_REQUEST } from "../store/actions/user";
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
    data() {
         return {
             email: '',
             password: '',
             token: null,
             show: false,
         }
    },
    methods: {
        doToast(variant = null,message = '',title='',to = null,) {
            this.$bvToast.toast(message, {
            title: title,
            variant: variant,
            solid: true,
            to: to
            })
        },
        onSubmit(e){
            e.preventDefault();
            this.createUser()
        },
        async createUser(){
            try {
                this.show = true
                const response = await axios.post('http://localhost:8000/api/register',
                    {email: this.email, password: this.password})
                
                console.log(response,'res')
                if(response.status == 201){
                    this.doToast('success','Click here to Login.','Registration Success','/login')
                    setTimeout(() => this.$router.push('/login'), 2000);
                }                
            } catch (error) {
                this.doToast('danger', 'Registration Failed' , 'Please try again!')
                this.show = false
            }
        }
    }
}
</script>
<style scoped>
    .welcome-container{
        width: 40%;
    }
    @media only screen and (max-width: 900px) {
        .welcome-container{
            width: 75%;
        }
    }

    @media only screen and (max-width: 600px) {
        .welcome-container{
            width: 100%;
        }
    }
</style>