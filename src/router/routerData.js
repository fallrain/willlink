import Nav from '@/views/Nav';

const Login = () => import(/* webpackChunkName: "Login" */ '@/views/login/Login');// 登录
const ForgetPassword = () => import(/* webpackChunkName: "Login" */ '@/views/login/ForgetPassword');// 忘记密码
const Register = () => import(/* webpackChunkName: "Register" */ '@/views/register/Register');// 忘记密码
const RegisterSuc = () => import(/* webpackChunkName: "RegisterSuc" */ '@/views/register/RegisterSuc');// 注册成功
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
