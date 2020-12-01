<template>
  <div class="layout">
    <el-container class="layout-container">
      <el-header class="layout-header d-flex align-items-center">
        <!-- logo   -->
        <a class="h5 text-light mb-0 mr-auto">UNI-ADMIN</a>
        <!-- menu菜单   -->
        <el-menu
          :default-active="navBar.active|numString"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item :index="index|numString" v-for="(item,index) in navBar.tree" :key="index">{{item.name}}</el-menu-item>

          <el-submenu index="100">
            <template slot="title">
              <el-avatar
                size="small"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              ></el-avatar>
              summer
            </template>
            <el-menu-item index="100-1">修改</el-menu-item>
            <el-menu-item index="100-2">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-container class="layout-main">
        <el-aside width="200px">
          <el-menu :default-active="slideMenuActive" @select="slideSelect" active-text-color="teal">
            <el-menu-item :index="index|numString" v-for="(item,index) in slideMenus" :key="index">
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <li v-for="(item, index) in 100" :key="index">{{ index }}</li>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import common from "../common/mixin/common"
export default {
  mixins : [common],  
  name: "",
  data() {
    return {
      navBar: {
        active : 0,  
        tree: [
          {
            name: "首页",
            subActive:'0',
            child: [
              {
                name: "后台首页",
                icon: "el-icon-s-home",
              },
              {
                name: "相册管理",
                icon: "el-icon-picture",
              },
              {
                name: "商品列表",
                icon: "el-icon-s-claim",
              },
            ],
          },
          {
            name: "商品",
            subActive:'0',
            child: [
              {
                name: "商品列表",
                icon: "el-icon-s-claim",
              },
              {
                name: "分类列表",
                icon: "el-icon-s-help",
              },
              {
                name: "商品规格",
                icon: "el-icon-s-help",
              },
              {
                name: "商品类型",
                icon: "el-icon-s-help",
              },
              {
                name: "商品评论",
                icon: "el-icon-s-help",
              },
            ],
          },
          {
            name: "订单",
            subActive:'0',
            child: [
              {
                name: "订单管理",
                icon: "el-icon-s-help",
              },
              {
                name: "发票管理",
                icon: "el-icon-s-help",
              },
              {
                name: "售后服务",
                icon: "el-icon-s-help",
              },
            ],
          },
          {
            name: "会员",
            subActive:'0',
            child: [
              {
                name: "会员列表",
                icon: "el-icon-s-help",
              },
              {
                name: "会员等级",
                icon: "el-icon-s-help",
              },
            ],
          },
          {
            name: "设置",
            subActive:'0',
            child: [
              {
                name: "基础设置",
                icon: "el-icon-s-help",
              },
              {
                name: "物流设置",
                icon: "el-icon-s-help",
              },
              {
                name: "管理员管理",
                icon: "el-icon-s-help",
              },
              {
                name: "交易设置",
                icon: "el-icon-s-help",
              },
            ],
          },
          {
            name: "测试",
            subActive:'0',
            child: [],
          },
        ],
      },
    };
  },
  computed : {
      slideMenus(){
         return this.navBar.tree[this.navBar.active].child || [];
      },
      slideMenuActive : {
          get(){
            return this.navBar.tree[this.navBar.active].subActive || "0" 
          },
          set(val){
            this.navBar.list[this.navBar.active].subActive = val;
          }
      }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.navBar.active = key;
    },
    slideSelect(key, keyPath) {
      this.slideMenuActive = key;
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