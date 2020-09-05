import axios from 'axios';
import lodash from 'lodash';

const getDefaultState = () => {
    return {
        project: null,
        projects: [],
        exist: false,
    }
}

const state = getDefaultState();

const getters = {
    getProject: (state) => state.project,
    getProjects: (state) => state.projects,
    isExist: (state) => state.exist
};

const actions = {
    async fetchProjects({commit}){
        const response = await axios.get(`http://localhost:8000/api/projects/`)
        // console.log(response,'res')
        commit('setProjectList', response.data)
    },    
    SaveProjectToState({commit}, project){
        commit('setProject', project)
    },
    CheckIfProjectExist({commit},exist){
        commit('setExistState', exist)
    },
    GO_RESETPROJECT({commit}){
        commit('resetState')
    }

};

const mutations = {
    setProject: (state,project) => {state.project = project},
    setProjectList: (state,projects) => {state.projects = projects},
    setExistState: (state,exist) => {state.exist = exist},
    resetState (state) {
        Object.assign(state, getDefaultState())
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}