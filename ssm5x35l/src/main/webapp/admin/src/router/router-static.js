import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import chongwuxinxi from '@/views/modules/chongwuxinxi/list'
    import forum from '@/views/modules/forum/list'
    import news from '@/views/modules/news/list'
    import lingyang from '@/views/modules/lingyang/list'
    import jiyang from '@/views/modules/jiyang/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yishengxinxi from '@/views/modules/yishengxinxi/list'
    import jiyangjieguo from '@/views/modules/jiyangjieguo/list'
    import guahaoyuyue from '@/views/modules/guahaoyuyue/list'
    import storeup from '@/views/modules/storeup/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/chongwuxinxi',
        name: '宠物信息',
        component: chongwuxinxi
      }
      ,{
	path: '/forum',
        name: '宠物论坛',
        component: forum
      }
      ,{
	path: '/news',
        name: '网站公告',
        component: news
      }
      ,{
	path: '/lingyang',
        name: '领养',
        component: lingyang
      }
      ,{
	path: '/jiyang',
        name: '寄养',
        component: jiyang
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/yishengxinxi',
        name: '医生信息',
        component: yishengxinxi
      }
      ,{
	path: '/jiyangjieguo',
        name: '寄养结果',
        component: jiyangjieguo
      }
      ,{
	path: '/guahaoyuyue',
        name: '挂号预约',
        component: guahaoyuyue
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
