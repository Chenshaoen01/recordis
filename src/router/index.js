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
    path: '/productdetail/:id',
    name: 'productdetail',
    component: () => import('../views/ProductDetail.vue'),
  },
  {
    path: '/takeaway',
    name: 'takeaway',
    component: () => import('../views/TakeAway.vue'),
  },
  {
    path: '/fooddelivery',
    component: () => import('../views/FoodDelivery.vue'),
  },
  {
    path: '/orderbuilt/:id',
    name: 'orderbuilt',
    component: () => import('../views/OrderBuilt.vue'),
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: () => import('../views/ReservationPage.vue'),
  },
  {
    path: '/reservationconfirm/:id',
    name: 'reservationconfirm',
    component: () => import('../views/ReservationConfirm.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
