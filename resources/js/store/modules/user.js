import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from "../actions/user";
import Vue from "vue";
import { AUTH_LOGOUT } from "../actions/auth";
import axios from 'axios'

const getDefaultState = () => {
  return {
    status: "", 
    profile: null, 
    token: localStorage.getItem("user-token") || "",
  }
}

const state = getDefaultState();

const getters = {
  getProfile: state => state.profile,
  isProfileLoaded: state => !!state.profile.name
};

const actions = {
  [USER_REQUEST]: async({ commit, dispatch }) => {
    commit(USER_REQUEST);
    await axios.get("http://localhost:8000/api/me",{
      headers:{
        'Authorization' : `Bearer ${state.token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        }
      })
      .then(resp => {
        // console.log(resp,'data')
        commit(USER_SUCCESS, resp.data);
      })
      .catch(() => {
        console.log('kung error')
        commit(USER_ERROR);
        // if resp is unauthorized, logout, to
        dispatch(AUTH_LOGOUT);
      });
  },
  GO_RESET({commit}){
    commit('resetState')
  }
};

const mutations = {
  [USER_REQUEST]: state => {
    state.status = "loading";
  },
  [USER_SUCCESS]: (state, resp) => {
    state.status = "success";
    Vue.set(state, "profile", resp);
  },
  [USER_ERROR]: state => {
    state.status = "error";
  },
  [AUTH_LOGOUT]: state => {
    state.profile = null;
  },
  resetState (state) {
    Object.assign(state, getDefaultState())
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};