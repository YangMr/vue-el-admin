<template>
  <div class="layout">
    <el-container class="layout-container">
      <el-header class="layout-header d-flex align-items-center">
        <!-- logo   -->
        <a class="h5 text-light mb-0 mr-auto">UNI-ADMIN</a>
        <!-- 头部导航   -->
        <el-menu
          :default-active="navBar.active | numString"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item
            :index="index | numString"
            v-for="(item, index) in navBar.tree"
            :key="index"
            >{{ item.name }}</el-menu-item
          >

          <el-submenu index="100">
            <template slot="title">
              <el-avatar
                size="small"
                :src="$store.getters.getUser.username ? $store.getters.getUser.username : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
                "
              ></el-avatar>
              {{$store.getters.getUser.username}}
            </template>
            <el-menu-item index="100-1">修改</el-menu-item>
            <el-menu-item index="100-2">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-container class="layout-main">
        <el-aside width="200px">
          <!-- 侧边栏导航 -->
          <el-menu
            :default-active="slideMenuActive"
            @select="slideSelect"
            active-text-color="teal"
          >
            <el-menu-item
              :index="index | numString"
              v-for="(item, index) in slideMenus"
              :key="index"
            >
              <i :class="item.icon"></i>
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { clearStorage } from "../utils/storage";
import { userLogout } from "../api/user";
import common from "../common/mixin/common";
export default {
  mixins: [common],
  name: "",
  data() {
    return {
      navBar: null,
    };
  },
  created() {
    this.navBar = this.$store.getters.getNavBar;
  },
  computed: {
    slideMenus() {
      return this.navBar.tree[this.navBar.active].child || [];
    },
    slideMenuActive: {
      get() {
        return this.navBar.tree[this.navBar.active].subActive || "0";
      },
      set(val) {
        this.navBar.tree[this.navBar.active].subActive = val;
      },
    },
  },
  methods: {
    handleSelect(key, keyPath) {
      this.navBar.active = key;
      if (key == "100-2") {
        alert("123");
        this.logout();
      }
      // this.slideMenuActive = "0"
    },
    slideSelect(key, keyPath) {
      this.slideMenuActive = key;
    },
    async logout() {
      const result = await userLogout();
      if (result.status == 200) {
        this.$store.dispatch("changeLogout");
        //跳转到登录页
        this.$router.push({ name: "login" });
      } else {
        this.$message.error("退出失败");
      }
    },
  },
  components: {},
};
</script>


<style scoped>
.layout-container {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: hidden;
}
.layout-main {
  overflow: auto;
}
.layout-header {
  background-color: #545c64;
}
.el-menu {
  min-height: 100%;
}
</style>