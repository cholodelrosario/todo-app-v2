import {
    AUTH_REQUEST,
    AUTH_ERROR,
    AUTH_SUCCESS,
    AUTH_LOGOUT
  } from "../actions/auth";
  import { USER_REQUEST } from "../actions/user";
  import apiCall from "../utils/api";
  import axios from 'axios'
  
  const state = {
    token: localStorage.getItem("user-token") || "",
    status: "",
    hasLoadedOnce: false
  };
  
  const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
  };
  
  const actions = {
    [AUTH_REQUEST]: ({ commit, dispatch }, user) => {
      return new Promise((resolve, reject) => {
        commit(AUTH_REQUEST);
        axios.post('http://localhost:8000/api/login',user)
          .then(resp => {
            console.log(resp,'resp AUTHREQUEST')
            localStorage.setItem("user-token", resp.data.token);
            // Here set the header of your ajax library to the token value.
            // example with axios
            // axios.defaults.headers.common['Authorization'] = resp.token
            commit(AUTH_SUCCESS, resp);
            dispatch(USER_REQUEST);
            resolve(resp);
          })
          .catch(err => {
            console.log(error,'error')
            commit(AUTH_ERROR, err);
            localStorage.removeItem("user-token");
            reject(err);
          });
      });
    },
    [AUTH_LOGOUT]: ({ commit }) => {
      return new Promise(resolve => {
        commit(AUTH_LOGOUT);
        commit(USER_REQUEST);
        localStorage.removeItem("user-token");
        resolve();
      });
    }
  };
  
  const mutations = {
    [AUTH_REQUEST]: state => {
      state.status = "loading";
    },
    [AUTH_SUCCESS]: (state, resp) => {
      state.status = "success";
      state.token = resp.data.token;
      state.hasLoadedOnce = true;
    },
    [AUTH_ERROR]: state => {
      state.status = "error";
      state.hasLoadedOnce = true;
    },
    [AUTH_LOGOUT]: state => {
      state.token = "";
    }
  };
  
  export default {
    state,
    getters,
    actions,
    mutations
  };