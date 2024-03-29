
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home.vue') }
    ]
  },

  {
    path: '/cars',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/cars.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
