
const routes = [
  {
    path: '',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/', name: 'Login', component: () => import('pages/Login.vue'), meta: { requiresAuth: false } },
      { path: '/home', name: 'Home', component: () => import('pages/Index.vue'), meta: { requiresAuth: true } },
      { path: '/plant', name: 'Plant', component: () => import('pages/Plant.vue'), meta: { requiresAuth: true } },
      { path: '/almanac', name: 'Almanac', component: () => import('pages/Almanac.vue'), meta: { requiresAuth: true } },
      { path: '/settings', name: 'Settings', component: () => import('pages/Settings.vue'),meta: { requiresAuth: true } }
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
