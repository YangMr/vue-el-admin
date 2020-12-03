import {setStorage,getStorage} from "../../utils/storage"

const state =  {
   navBar : getStorage("menu")
};

const getters = {
    getNavBar(state){
        return state.navBar;
    },
   
};

const mutations = {
    setNavBar(state,navBar){
        state.navBar = navBar;
        setStorage("menu",navBar)
    }
};

const actions = {
   changeSetNavBar({commit},navBar){
       const tree = navBar.map((item,index)=>{
            const arr = []; 
           item.child.forEach((item,index)=>{
               arr.push({
                   name : item.name,
                   icon : item.icon,
                   pathName : item.desc
               })
           })
            return {
                name : item.name,
                subActive : 0,
                child : arr
            }
       })
       const menu = {
           active : 0,
           tree
       }
        commit("setNavBar",menu);
   }, 
   
};

export default {
    state,
    getters,
    mutations,
    actions
}

