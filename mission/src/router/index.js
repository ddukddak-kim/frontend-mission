import { createRouter, createWebHistory } from 'vue-router';
import ItemList from '@/views/ItemList.vue';
import WishList from '@/views/WishList.vue';
import ItemInfo from '@/views/ItemInfo.vue';
import MyPage from '@/views/MyPage.vue';
import Login from '@/views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ItemList,
  },
  {
    path: '/item/:product_no',
    name: 'ItemInfo',
    component: ItemInfo,
  },
  {
    path: '/wish',
    name: 'WishList',
    component: WishList,
  },
  {
    path: '/myPage',
    name: 'MyPage',
    component: MyPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
