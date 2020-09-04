<template>
    <main>
        <Header/>
        <div id="wrapper">
            <div class="container-fluid">
                <router-view></router-view>
            </div>
        </div>

    </main>
</template>
<script>
import Header from './components/Header'
import { USER_REQUEST } from "./store/actions/user";
import axios from 'axios'

export default {
    components:{
        Header
    },
    created: function () {
    axios.interceptors.response.use(undefined, function (err) {
        return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        // if you ever get an unauthorized, logout the user
            this.$store.dispatch(AUTH_LOGOUT)
        // you can also redirect to /login if needed !
        }
        throw err;
        });
    });
    this.getUser()
    },
    data() {
        return {

        }
    },
    methods:{
        async getUser(){
            await this.$store.dispatch(USER_REQUEST)
            .then(() => {
                console.log('user gotcha')
            })  
        }        
    }
}
</script>