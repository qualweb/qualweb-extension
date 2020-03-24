import PageIndex from './pages/Index'
import Evaluation from './pages/Evaluation'
import Loading from './pages/Loading'

export default [
  {
    path: '/',
    component: PageIndex
  },
  {
    path: '/evaluation',
    name:"evaluation",
    component: Evaluation
  },
  {
    path: '/loading',
    name:"loading",
    component: Loading
  }
]
