import Nav from '@/views/Nav';

const Login = () => import(/* webpackChunkName: "Login" */ '@/views/login/Login');
const data = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录'
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
