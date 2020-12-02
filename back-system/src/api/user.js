//导出axios的配置文件
import request from "../utils/request"

//登录接口
export function userLogin(username,password){
    return request({
        url : "/login",
        method : "POST",
        data : {
            username, 
            password
        }
    })
}

//退出登录接口
export function userLogout(){
    return request({
        url : "/logout",
        method : "POST"
    })
}