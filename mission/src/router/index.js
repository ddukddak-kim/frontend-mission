import { createRouter, createWebHistory } from 'vue-router';
import ItemList from '@/views/ItemList.vue';
import WishList from '@/views/WishList.vue';
import CartList from '@/views/CartList.vue';
import ItemInfo from '@/views/ItemInfo.vue';
import MyPage from '@/views/MyPage.vue';
import Login from '@/views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ItemList,
    props: true,
  },
  {
    path: '/item/:product_no',
    name: 'ItemInfo',
    component: ItemInfo,
    props: true,
  },
  {
    path: '/wish',
    name: 'WishList',
    component: WishList,
  },
  {
    path: '/cart',
    name: 'CartList',
    component: CartList,
    props: true,
  },
  {
    path: '/myPage',
    name: 'MyPage',
    component: MyPage,
    props: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
