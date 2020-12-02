const TOKEN = "token";
const USER = "user";
//获取token
export function getStorageToken(){
    return sessionStorage.getItem(TOKEN)
}

//设置token
export function setStorageToken(token){
    sessionStorage.setItem(TOKEN,token)
}

//获取user
export function getStorageUser(){
    return JSON.parse(sessionStorage.getItem(USER))
}

//设置user
export function setStorageUser(user){
    sessionStorage.setItem(USER,JSON.stringify(user))
}

//清空token和user
export function removeStorageTokenAndUser(){
    sessionStorage.removeItem(TOKEN)
    sessionStorage.removeItem(USER)
}
