import Nav from '@/views/Nav';

const Login = () => import(/* webpackChunkName: "Login" */ '@/views/login/Login');// 登录
const ForgetPassword = () => import(/* webpackChunkName: "Login" */ '@/views/login/ForgetPassword');// 忘记密码
const Register = () => import(/* webpackChunkName: "Register" */ '@/views/register/Register');// 忘记密码
const RegisterSuc = () => import(/* webpackChunkName: "RegisterSuc" */ '@/views/register/RegisterSuc');// 注册成功
const Home = () => import('@/views/home/index'); // 引到页
const HomePage = () => import('@/views/index/index'); // 首页
const HomeProduct = () => import('@/views/index/product'); // 我的产品
const HomeAdd = () =>  import('@/views/index/add'); // 新增
const Product = () => import('@/views/product/index'); // 产品
const Found = () => import('@/views/found/index'); // 发现
const User = () => import('@/views/user/index'); // 我的
const UserSetting = () => import(/* webpackChunkName: "UserSetting" */ '@/views/user/UserSetting');// 个人设置
const UpdatePhone = () => import(/* webpackChunkName: "UpdatePhone" */ '@/views/user/UpdatePhone');// 修改手机
const AddVerificationCode = () => import(/* webpackChunkName: "AddVerificationCode" */ '@/views/user/AddVerificationCode');// 填写验证码

const data = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/forgetPassword',
    name: 'ForgetPassword',
    component: ForgetPassword,
    meta: {
      title: '忘记密码'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: '快速注册'
    }
  },
  {
    path: '/registerSuc',
    name: 'RegisterSuc',
    component: RegisterSuc,
    meta: {
      title: '注册成功'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        name: 'HomePage',
        path: '/',
        component: HomePage,
        meta: {
          title: '首页',
          bottomNav: true,
          topNav: false,
          topNotice: true,
        }
      },
      {
        name: 'HomeProduct',
        path: '/homeProduct',
        component: HomeProduct,
        meta: {
          title: '我的产品',
          bottomNav: false,
          topNav: true,
          topNotice: false,
        }
      },
      {
        name: 'HomeAdd',
        path: '/homeAdd',
        component: HomeAdd,
        meta: {
          title: '新增',
          bottomNav: false,
          topNav: true,
          topNotice: false,
        }
      },
      {
        name: 'Product',
        path: '/product',
        component: Product,
        meta: {
          title: '产品',
          topNav: false,
          topNotice: false,
          bottomNav: true,
        }
      },
      {
        name: 'Found',
        path: '/found',
        component: Found,
        meta: {
          title: '发现',
          topNav: false,
          topNotice: false,
          bottomNav: true
        }
      },
      {
        name: 'User',
        path: '/user',
        component: User,
        meta: {
          title: '我的',
          topNav: false,
          topNotice: false,
          bottomNav: true
        }
      },
      {
        path: 'userSetting',
        name: 'UserSetting',
        component: UserSetting,
        meta: {
          title: '个人设置',
          bottomNav: false
        }
      },
      {
        path: 'updatePhone',
        name: 'UpdatePhone',
        component: UpdatePhone,
        meta: {
          title: '更换账号',
          bottomNav: false
        }
      },
      {
        path: 'addVerificationCod/:updateAccount',
        name: 'AddVerificationCode',
        props: true,
        component: AddVerificationCode,
        meta: {
          title: '填写验证码',
          bottomNav: false
        }
      },
    ]
  }
];
if (process.env.NODE_ENV !== 'production') {
  data.unshift({
    path: '/',
    name: 'Nav',
    component: Nav,
    meta: {
      title: '导航'
    }
  });
}
export default { data };
