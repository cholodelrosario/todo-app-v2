import Vue from 'vue';
import Vuex from 'vuex';
import todos from './modules/todos'
import user from './modules/user'
import auth from './modules/auth'
import project from './modules/project'
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        todos,
        user,
        auth,
        project
    },
})

