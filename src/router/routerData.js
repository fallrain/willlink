import Nav from '@/views/Nav';

const Login = () => import(/* webpackChunkName: "Login" */ '@/views/login/Login');
const Home = () => import('@/views/home/index');
const HomePage = () => import('@/views/index/index');
const Product = () => import('@/views/product/index');
const Found = () => import('@/views/found/index');
const User = () => import('@/views/user/index');
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
          topNav: false
        }
      },
      {
        name: 'Product',
        path: '/product',
        component: Product,
        meta: {
          title: '产品',
          bottomNav: true
        }
      },
      {
        name: 'Found',
        path: '/found',
        component: Found,
        meta: {
          title: '发现',
          bottomNav: true
        }
      },
      {
        name: 'User',
        path: '/user',
        component: User,
        meta: {
          title: '我的',
          bottomNav: true
        }
      },
    ]
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
