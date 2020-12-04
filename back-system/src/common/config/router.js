//路由配置
const routes = [
    {
        path: "/",
        name: "layout",
        redirect: "/index",
        component: "Layout",
        children: [
            {
                component: "index/index"
            },
            {   
                meta : {title : "相册管理"},
                component: "image/index",
            },
            {
                meta : {title : "商品列表"},
                component: "shop/goods/list",
            },
            {
                meta : {title : "分类管理"},
                component : "shop/category/list"
            },
            {
                meta : {title : "商品规格管理"},
                component : "shop/sku/list"
            },
            {
                meta : {title : "商品类型管理"},
                component : "shop/type/list"
            },
            {
                meta : {title : "商品评论管理"},
                component : "shop/comment/list"
            },
            {
                meta : {title : "订单管理"},
                component : "order/order/list"
            },
            {
                meta : {title : "发票管理"},
                component : "order/invoice/list"
            },
            {
                meta : {title : "售后服务"},
                component : "order/after-sale/list"
            },
            {
                meta : {title : "会员列表"},
                component : "user/user-list/list"
            },
            {
                meta : {title : "会员等级"},
                component : "user/user-level/list"
            },
            {
                meta : {title : "基础设置"},
                component : "set/base"
            },
            {
                meta : {title : "物流设置"},
                component : "set/express"
            },
            {
                meta : {title : "管理员设置"},
                component : "set/manager"
            },
            {
                meta : {title : "交易设置"},
                component : "set/payment"
            },
        ]
    },
    {
        component: "login/index"
    },
    {
        component: "404"
    },
    {
        path: "*",
        redirect: "/index"
    }
    
];

//封装获取路由信息的方法
let getRoutes = function () {
    //调用自动生成路由方法
    createRoute(routes)

    //返回routes路由配置
    return routes;
}

//封装自动生成路由方法
function createRoute(arr) {

    //遍历routes路由配置内容
    for (let i = 0; i < arr.length; i++) {

        //如果数组里面component的值没有话,我们就不再继续往下执行
        if (!arr[i].component) return;

        //去除index
        let val = getValue(arr[i].component)

        //自动生成name  
        arr[i].name = arr[i].name || val.replace(/\//g, "_");

        //自动生成path
        arr[i].path = arr[i].path || `/${val}`;

        //将component : login/index 转化成 import("../../views/login/index.vue") 这种形式
        let componentFunction = import(`../../views/${arr[i].component}.vue`);

        //将component : login/index 转化成  component: () => import("../../views/login/index.vue")
        arr[i].component = () => componentFunction;

        //判断有没有子路由
        if (arr[i].children && arr[i].children.length > 0) {
            createRoute(arr[i].children)
        }
    }
}

//定义去除index方法
function getValue(str) {
    //判断左后一个/后面的值是不是index
    let index = str.lastIndexOf('/');
    //截取/后面的index
    let val = str.substring(index + 1, str.length)
    //判断截取/后面的值是不是index
    if (val == "index") {
        return str.substring(index, -1)
    }
    return str;
}


//导出路由配置
export default getRoutes();

