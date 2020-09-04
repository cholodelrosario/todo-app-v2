import axios from 'axios';
import lodash from 'lodash';
var sri = require('simple-random-id');

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({commit}){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
        let map = response.data.map(a=>{
            return {
                ...a,
                sri: sri()
            }
        })
        commit('setTodos', map)
    },    

    async addTodo({commit}, payload){
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: payload.title , completed: false, userId : payload.userId, 
        })

        commit('newTodo', {...response.data,sri: sri()})
    },
    deleteTodo({commit}, sri){
        // await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', sri);
    },
    updateTodo({commit}, index, todo){
        // await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('updateState', index, todo);
    }

};

const mutations = {
    setTodos: (state,todos) => {state.todos = todos},
    newTodo: (state,todos) => state.todos.unshift(todos),
    removeTodo: (state,sri) => 
        (state.todos = state.todos.filter(todo => todo.sri !== sri)),
    updateState: (state,index,todo) => Object.assign(state.todos[index], todo)
};

export default {
    state,
    getters,
    actions,
    mutations
}