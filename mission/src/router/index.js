import { createRouter, createWebHistory } from 'vue-router';
import ItemListPage from '@/views/ItemList.vue';
import ItemInfoPage from '@/views/ItemInfo.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ItemListPage,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/item',
    name: 'ItemInfo',
    component: ItemInfoPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
