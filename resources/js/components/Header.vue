<template>
    <main>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">Todo App V2</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav v-if="returnName">
                <b-nav-item to="/todolist">Todo List</b-nav-item>
                <!-- <b-nav-item to="/projectboard" disabled>Project Board</b-nav-item> -->
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <!-- <b-nav-item @click="logout" v-if="returnName">Logout</b-nav-item> -->
                <b-nav-item-dropdown right v-if="returnName">
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content v-if="returnName !== null && returnName.user.name !== undefined">
                    <em v-if="returnName !== null && returnName.user.name !== undefined">{{returnName.user.name == '' ? returnName.user.email : returnName.user.name}}</em>
                </template>
                <b-dropdown-item @click="logout">Logout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>     
    </main>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { AUTH_LOGOUT } from "../store/actions/auth";

export default {
    data(){
        return {

        }
    },
    computed: {
        ...mapGetters(['getProfile']),
        returnName(){
            try {
                return this.getProfile
            } catch (error) {
                return false
            }
        }
    },
    methods: {
        ...mapActions(['GO_RESET','GO_RESETPROJECT']),
        logout: async function () {
            await this.$store.dispatch(AUTH_LOGOUT)
            .then((ress) => {
                console.log(ress,'AUTH_LOGOUT')
                if(localStorage.getItem("user-token") !== null){
                    localStorage.removeItem("user-token")
                }
                this.GO_RESET()
                this.GO_RESETPROJECT()
                this.$router.push('/login')
            })
        }
    },
}
</script>