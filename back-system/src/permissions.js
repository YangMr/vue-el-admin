/*

    界面的控制: 界面的鉴权
        全局的鉴权: 后台管理系统

        局部的鉴权: 

    跳转到登录页面                  没有token
                                        if(to.path == "/login"){
                                            next();
                                        }else{
                                            next("/login")
                                        }


    跳转到非登录页面                有token的时候
                                        if(token){
                                            if(to.path !== "/login"){
                                                next();
                                            }else{
                                                next(from.path)
                                            }
                                        }

                                        //to 要进入的路由 from 当前离开的路由 next 进入指定路由

*/

//引入router路由对象
import router from "./router"

//引入vuex的实例对象
import store from "./store"



//使用路由守卫对路由进行拦截

router.beforeEach((to, from, next) => {

    //获取vuex里面存储的token
    const token = store.getters.getToken;
    if (!token) {
        if (to.path == "/login") {
            next();
        } else {
            next("/login");
        }
    } else {
        if (to.path !== "/login") {
            //判断进入的是不是404页面,如果不是404页面,我们需要判断当前用户有没有要进入的页面的权限
            if (to.name !== "404") {
                //获取本地存储的当前用户页面权限的规则
                let rule = window.sessionStorage.getItem('rule')
                rule = rule ? JSON.parse(rule) : []

                let index = rule.findIndex(item => {
                    return item.rule_id > 0 && item.desc === to.name
                })
                if (index === -1) {
                    return next({ name: '404' })
                }

            }
            next();
        } else {
            next(from.path);
        }
    }
})

