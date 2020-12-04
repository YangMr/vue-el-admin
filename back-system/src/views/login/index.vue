<template>
  <div class="login">
    <div class="card text-center">
      <div class="card-header bg-white h3 text-secondary">UNI-ADMIN</div>
      <div class="card-body">
        <el-form  :model="loginForm" ref="loginForm" :rules="rules">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="w-100 bg-secondary border-0" type="primary" @click="loginSubmit" size="medium">立即登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {userLogin} from "../../api/user"
export default {
  name: "",
  data() {
    return {
        loginForm : {},
        rules : {
            username : [
                {required: true , message: "请输入用户名", trigger: "blur"}
            ],
            password : [
                {required: true , message: "请输入密码", trigger: "blur"}
            ]
        }
    };
  },

  methods : {
      //性能优化的点 : 可以做一个节流    自己去写一个节流方法    使用loadsh库提供的方法去实现节流
      loginSubmit(){
          this.$refs["loginForm"].validate(async (valid)=>{
              if(valid){
                const result = await userLogin(this.loginForm.username,this.loginForm.password);
                if(result.status == 200){
                   //获取请求到的数据
                    const {data} = result.data;
                   //将token保存到vuex
                   this.$store.dispatch("changeSetToken",data.token);
                   //将用户信息保存到vuex
                   this.$store.dispatch("changeSetUser",data)
                   //将用户页面权限的规则保存到本地
                    sessionStorage.setItem("rule",JSON.stringify(data.role.rules));
                   //将菜单保存到vuex
                   this.$store.dispatch("changeSetNavBar",data.tree)
                   //跳转到首页
                   this.$router.push({name : "index"})
                }else{
                    this.$message.error("登录失败");
                }
              }
          })
      }
  },
  components: {},
};
</script>


<style scoped>
.login {
  width: 500px;
  margin: 100px auto;
}
</style>