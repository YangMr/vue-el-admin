/*


一个指令定义对象可以提供如下几个钩子函数 (均为可选)：

bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。

inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。

update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。

我们会在稍后讨论渲染函数时介绍更多 VNodes 的细节。

componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。

unbind：只调用一次，指令与元素解绑时调用。


*/
//引入vue
import Vue from 'vue'

//引入Vuex
import store from "./store"


//创建自定义的指令
Vue.directive("auth", {
    inserted: function (el,binding) { 
        //获取ruleNames规则
        const rule =  store.getters.getUser.ruleNames;
        //在ruleName规则里面查找自定义指定所绑定的规则
       const bool = rule.includes(binding.value)
        //判断返回值是否为true,如果是true的话,则表示改用户有添加角色的权限,如果是false则表示没有添加角色的权限
        if(!bool){
            el.parentElement.removeChild(el);
        }
    },
})