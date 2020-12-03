/*
    存储token的方法 本地 vuex
        1. 在vuex文件中调用登录接口、获取用户信息接口、退出登录等功能接口
        - 登录的业务逻辑如何处理
            在vuex中定义登录的方法,定义的登录方法在什么地方调用? 必须在组件内调用 -》 调用的接口 -》 获取到用户的token
            -》 用户的token保存到vuex,以及本地
        - 获取用户信息    
        - 退出登录功能 - 退出登录接口 有的退出登录接口需要你进行退出登录的时候,吧token通过头信息发送给后台, 有的是不需要发送token
                                    也可以退出,还有的退出登录功能是不需要调用退出登录接口
            1.1 清除登录的状态 token和用户信息 
                    本地  vuex     
            1.2 跳转到登录页       
    鉴权:   
        - 所有页面鉴权 - 用户是否登录   
            1. 当用户登录之后,后台会返回一个token,我们会将这个token保存在vuex和本地存储里面
            2. 在src目录下面新建permission.js文件,我们会把页面鉴权的业务全部写的premission.js这个文件
            3. 梳理一下业务
                
                没有token
                    - 跳转到非登录以外的页面    不可以跳转到其他页面 next("/login")  
                      if(to.path != "/login" ){
                          next("/login")
                      }else{
                          next()
                      }
                    - 跳转到登录页面  可以跳转到登录页面 next()
                有token
                    - 跳转到登录页    可以跳转 next()            不允许跳转到登录页面   next(form.path)
                    - 跳转到非登录页面
                            有用户信息 ,则跳转到要进入的页面next()
                            没有用户信息
                                 调用获取用户信息接口
                                    - 获取到用户信息,则进入要跳转的页面
                                        next()
                                    - 获取不到,则跳准到登录页面
                                        next("/login")
        
                                        
        
            - 部分页面鉴权 - 用户是否登录
*/

// import router from "./router"

// import store from "./store"

// router.beforeEach((to,from,next)=>{

//     //获取token
//     const token = store.getters.getToken;

//     //没有token
//     if(!token){
//         if(to.path !== "/login"){
//             next("/login")
//         }else{
//             next();
//         }
//     }else{
//         //获取用户信息
//         const user = store.getters.getUser;
//         if(user){
//             next();
//         }else{
//             //重新请求获取用户信息接口
//             getUserInfo().then(res=>{
//                 if(res){
//                     next();
//                 }else{
//                     next("/login")
//                 }
//             })
//         }
//     }

// })

//引入路由
import router from "./router";
//引入vuex
import store from "./store"

import {Prompt} from "./utils/prompt"
const message = new Prompt();

router.beforeEach(async (to, from, next) => {
    //当每一次路由跳转的时候,获取token 两种: 本地获取   vuex获取
    const token = store.getters.token;

    //没有的token的情况
    if (!token) {
        //判断是否跳转到非登录页面
        if (to.path != "/login") {
            next("/login")
        } else {
            next();
        }
    } else {
        //判断是否能够获取到用户信息
        const userInfo = store.getters.info;
        if (userInfo) {
            if (to.path == "/login") {
                // next("/login") 
                next(from.path);
            } else {
                next();
            }
        } else {
            //调用获取用户信息接口
           const userInfo = await store.dispatch("GetUserInfo");
            if (userInfo) {
                next();
            } else {
                message.PromptMessage("获取用户信息失败","error")
                next("/login")
            }
        }
    }
})