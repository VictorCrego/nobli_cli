import QrCodeScreen from 'pages/QrCodeScreen'
import RegisterPage from 'pages/Register'
import IndexPage from 'pages/Index'
import Redirect from 'pages/Redirect'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexPage
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/qrcodescreen',
    name: 'qrcodescreen',
    component: QrCodeScreen
  },
  {
    path: '/redirect',
    name: 'redirect',
    component: Redirect
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
