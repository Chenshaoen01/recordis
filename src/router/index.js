import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/productlist',
    name: 'productlist',
    component: () => import('../views/ProductList.vue'),
  },
  {
    path: '/productdetail',
    name: 'productdetail',
    component: () => import('../views/ProductDetail.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
