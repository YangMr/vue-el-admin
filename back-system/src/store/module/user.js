import {setStorageToken,getStorageToken,getStorageUser,setStorageUser} from "../../utils/auth"

const state =  {
    token : getStorageToken(),
    user : getStorageUser(),
};

const getters = {
    getToken(state){
        return state.token;
    },
    getUser(state){
       return state.user; 
    }
};

const mutations = {
    setToken(state,token){
        state.token = token;
        setStorageToken(token);
    }, 
    setUser(state,user){
        state.user = user;
        setStorageUser(user)
    }
};

const actions = {
   changeSetToken({commit},token){
     commit("setToken",token);
   }, 
   changeSetUser({commit},user){
    commit("setUser",user);
  }, 
};

export default {
    state,
    getters,
    mutations,
    actions
}