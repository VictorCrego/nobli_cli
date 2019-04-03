import QrCodeScreen from 'pages/QrCodeScreen'
import RegisterPage from 'pages/Register'
import IndexPage from 'pages/Index'

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
