//封装获取会话存储数据的方法
export function getStorage(attr){
    return JSON.parse(sessionStorage.getItem(attr))
}

//封装设置会话存储数据的方法
export function setStorage(attr,value){
    return sessionStorage.setItem(attr,JSON.stringify(value));
}

//封装删除会话存储数据的方法
export function removeStorage(attr){
    return sessionStorage.removeItem(attr);
}

//封装清空会话存储数据的方法
export function clearStorage(){
    return sessionStorage.clear();
}