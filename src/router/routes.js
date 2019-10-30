
const routes = [
  {
    path: '',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/', name: 'Login', component: () => import('pages/Login.vue') },
      { path: '/home', name: 'Home', component: () => import('pages/Index.vue') },
      { path: '/plant', name: 'Plant', component: () => import('pages/Plant.vue') },
      { path: '/result', name: 'Result', component: () => import('pages/Result.vue') },
      { path: '/settings', name: 'Settings', component: () => import('pages/Settings.vue') }
    ]
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
