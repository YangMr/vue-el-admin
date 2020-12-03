/*

    只有部分页面需要鉴权


    界面的鉴权:

        知识点核心: 路由守卫  vuex   本地存储 
        
        形式:
            所有页面鉴权
                登录的时候直接可以拿到用户的信息,不用登录之后在调用获取用户信息接口

                登录的时候,后台返回的只是登录成功,我们还需要调用获取用户信息接口,这个时候我们不仅要判断token,还需要判断用户信息是否能够获取到,如果不能获取到,我们需要重新请求,如果
                能够请求到,直接进入下一个路由,如果获取不到,则进入登录页面,重新进行登录


            部分页面鉴权


*/

import router from "./router"
import store from "./store"

router.beforeEach((to,from,next)=>{
    if(to.meta.auth){
        const token = store.getters.getToken;

        if(!token){
            next("/login")
        }else{
            next();
        }
    }else{
        next();
    }
})