import Vue from 'vue';
import Router from 'vue-router';
import Welcome from './views/Welcome.vue'
import Login from './views/Login.vue'

import store from './store' // your vuex store 

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/startproject')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

const ifAuthenticatedAndExist = (to, from, next) => {
  if (store.getters.isAuthenticated && store.getters.getProfile.user.name !== '') {
    next('/todolist')
    return
  } else if(store.getters.isAuthenticated) {
    next('/startproject')
    return
  } else {
    next('/login')
  }
  
}


Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome,
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./views/Login.vue'),
    },
    {
        path: '/startproject',
        name: 'Start',
        component: () => import('./views/StartProject.vue'),
        beforeEnter: ifAuthenticated,

    },
    {
        path: '/joinproject',
        name: 'Join',
        component: () => import('./views/JoinProject.vue'),
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/todolist',
        name: 'Todo',
        component: () => import('./views/TodoList.vue'),
        beforeEnter: ifAuthenticated,
    },
    {
      path: '/todopage/:id',
      name: 'Todo',
      component: () => import('./views/TodoPage.vue'),
      beforeEnter: ifAuthenticated,
  }
];

const router = new Router({
    routes: routes
});

export default router;