import IndexPage from 'pages/Index'
import RegisterPage from 'pages/Register'
import QrCodeScreen from 'pages/QrCodeScreen'
import LocalMenuPage from 'pages/LocalMenu'
import ShowsEventos from 'pages/ShowsEventos'
import BaresRestaurantes from 'pages/BaresRestaurantes'
import Cardapio from 'pages/Cardapio'
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
    path: '/localmenu',
    name: 'localmenu',
    component: LocalMenuPage
  },
  {
    path: '/showseventos',
    name: 'showseventos',
    component: ShowsEventos
  },
  {
    path: '/baresrestaurantes',
    name: 'baresrestaurantes',
    component: BaresRestaurantes
  },
  {
    path: '/cardapio',
    name: 'cardapio',
    component: Cardapio
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
