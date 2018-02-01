import Home from '../pages/Home'
import About from '../pages/About'
import Inbox from '../pages/Inbox'

module.exports = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'About',
    path: '/about',
    component: About
  },
  {
    name: 'Inbox',
    path: '/inbox',
    component: Inbox
  }
]
