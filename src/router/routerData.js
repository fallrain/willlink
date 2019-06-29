import Nav from '@/views/Nav';

const Login = () => import(/* webpackChunkName: "Login" */ '@/views/login/Login');// 登录
const NoNetwork = () => import(/* webpackChunkName: "NoNetwork" */ '@/views/404/NoNetwork.vue');// 暂无网络
const ForgetPassword = () => import(/* webpackChunkName: "Login" */ '@/views/login/ForgetPassword');// 忘记密码
const Register = () => import(/* webpackChunkName: "Register" */ '@/views/register/Register');// 忘记密码
const RegisterSuc = () => import(/* webpackChunkName: "RegisterSuc" */ '@/views/register/RegisterSuc');// 注册成功
const Home = () => import('@/views/home/index'); // 引到页
const HomePage = () => import('@/views/index/index'); // 首页
const HomeProduct = () => import('@/views/index/product'); // 我的产品
const HomeAdd = () => import('@/views/index/add'); // 新增
const HomeSearch = () => import('@/views/index/search'); // 搜索
const HomeDetail = () => import('@/views/index/detail'); // 详情
const Product = () => import('@/views/product/index'); // 产品
const Found = () => import('@/views/found/index'); // 发现
const User = () => import('@/views/user/index'); // 我的
const UserSetting = () => import(/* webpackChunkName: "UserSetting" */ '@/views/user/UserSetting');// 个人设置
const UpdatePhone = () => import(/* webpackChunkName: "UpdatePhone" */ '@/views/user/UpdatePhone');// 修改手机
const AddVerificationCode = () => import(/* webpackChunkName: "AddVerificationCode" */ '@/views/user/AddVerificationCode');// 填写验证码
const UpdatePwd = () => import(/* webpackChunkName: "UpdatePwd" */ '@/views/user/UpdatePwd');// 修改密码
const SysAnnouncement = () => import(/* webpackChunkName: "SysAnnouncement" */ '@/views/user/SysAnnouncement');// 系统公告
const MyTeam = () => import(/* webpackChunkName: "MyTeam" */ '@/views/user/MyTeam');// 我的团队
const SysAnnouncementDetail = () => import(/* webpackChunkName: "SysAnnouncementDetail" */ '@/views/user/SysAnnouncementDetail');// 系统公告详情
const MyIncome = () => import(/* webpackChunkName: "MyIncome" */ '@/views/user/MyIncome');// 我的收益
const Feedback = () => import(/* webpackChunkName: "Feedback" */ '@/views/user/Feedback');// 问题反馈
const FeedbackSuc = () => import(/* webpackChunkName: "FeedbackSuc" */ '@/views/user/FeedbackSuc');// 反馈成功
const AboutUs = () => import(/* webpackChunkName: "AboutUs" */ '@/views/user/AboutUs');// 关于我们
const PrivateKeyManagement = () => import(/* webpackChunkName: "PrivateKeyManagement" */ '@/views/user/PrivateKeyManagement');// 私钥管理
const PrivateKeyImport = () => import(/* webpackChunkName: "PrivateKeyImport" */ '@/views/user/PrivateKeyImport');// 私钥导入
const PrivateKeyImportList = () => import(/* webpackChunkName: "PrivateKeyImportList" */ '@/views/user/PrivateKeyImportList');// 私钥导入列表
const ColdWalletLoad = () => import(/* webpackChunkName: "ColdWalletLoad" */ '@/views/user/ColdWalletLoad');// 冷钱包加载

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
    path: '/noNetwork',
    name: 'NoNetwork',
    component: NoNetwork,
    meta: {
      title: '暂无网络'
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
          scrollTop: true,
          bottomNav: true,
          topNav: false,
        }
      },
      {
        name: 'HomeProduct',
        path: '/homeProduct',
        component: HomeProduct,
        meta: {
          title: '我的产品',
          scrollTop: true,
          bottomNav: false,
          topNav: true,
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
        }
      },
      {
        name: 'HomeSearch',
        path: '/homeSearch',
        component: HomeSearch,
        meta: {
          title: '',
          bottomNav: false,
          topNav: false,
        }
      },
      {
        name: 'HomeDetail',
        path: '/homeDetail',
        component: HomeDetail,
        meta: {
          title: '',
          bottomNav: false,
          topNav: false,
        }
      },
      {
        name: 'Product',
        path: '/product',
        component: Product,
        meta: {
          title: '产品',
          topNav: false,
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
          bottomNav: true
        }
      },
      {
        name: 'User',
        path: '/user',
        component: User,
        meta: {
          title: '我的',
          scrollTop: true,
          topNav: false,
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
      {
        path: 'updatePwd',
        name: 'UpdatePwd',
        component: UpdatePwd,
        meta: {
          title: '修改密码',
          scrollTop: true,
          bottomNav: false
        }
      },
      {
        path: 'sysAnnouncement',
        name: 'SysAnnouncement',
        component: SysAnnouncement,
        meta: {
          title: '系统公告',
          scrollTop: true,
          bottomNav: false
        }
      },
      {
        path: 'myTeam',
        name: 'MyTeam',
        component: MyTeam,
        meta: {
          title: '我的团队',
          scrollTop: true,
          bottomNav: false
        }
      },
      {
        path: 'sysAnnouncementDetail',
        name: 'SysAnnouncementDetail',
        component: SysAnnouncementDetail,
        meta: {
          title: '系统公告',
          scrollTop: true,
          bottomNav: false
        }
      },
      {
        path: 'myIncome',
        name: 'MyIncome',
        component: MyIncome,
        meta: {
          title: '我的收益',
          scrollTop: true,
          bottomNav: false
        }
      },
      {
        path: 'feedback',
        name: 'Feedback',
        component: Feedback,
        meta: {
          title: '问题反馈',
          scrollTop: true,
          bottomNav: false
        }
      },
      {
        path: 'feedbackSuc',
        name: 'FeedbackSuc',
        component: FeedbackSuc,
        meta: {
          title: '反馈成功',
          scrollTop: true,
          bottomNav: false
        }
      },
      {
        path: 'aboutUs',
        name: 'AboutUs',
        component: AboutUs,
        meta: {
          title: '关于我们',
          scrollTop: true,
          bottomNav: false
        }
      },
      {
        path: 'privateKeyManagement',
        name: 'PrivateKeyManagement',
        component: PrivateKeyManagement,
        meta: {
          title: '私钥管理',
          scrollTop: true,
          bottomNav: false
        }
      },
      {
        path: 'privateKeyImportList',
        name: 'PrivateKeyImportList',
        component: PrivateKeyImportList,
        meta: {
          title: '私钥导入',
          scrollTop: true,
          bottomNav: false
        }
      },
      {
        path: 'privateKeyImport',
        name: 'PrivateKeyImport',
        component: PrivateKeyImport,
        meta: {
          title: '私钥导入',
          scrollTop: true,
          bottomNav: false
        }
      },
      {
        path: 'coldWalletLoad',
        name: 'ColdWalletLoad',
        component: ColdWalletLoad,
        meta: {
          title: '冷钱包加载',
          scrollTop: true,
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
