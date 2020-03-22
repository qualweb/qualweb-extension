import PageIndex from './pages/Index'
import Evaluation from './pages/Evaluation'

export default [
  {
    path: '/',
    component: PageIndex
  },
  {
    path: '/evaluation',
    name:"evaluation",
    component: Evaluation
  }
]
