<template>
  <div id="item-list-page">
    <Header v-bind:storeName="store.name" data-test="store-name" />
    <div class="item-list">
      <Item v-for="(item, index) of product" :key="index" :product="item" />
      <Item v-if="isEven" :isEmpty="true" data-test="empty-item" />
    </div>
    <Navigation />
  </div>
</template>

<script>
import Header from '@/components/ItemList/Header.vue';
import Navigation from '@/components/ItemList/Navigation.vue';
import Item from '@/components/ItemList/Item.vue';

import { getList } from '@/utils/api/index';

export default {
  name: 'ItemListPage',
  components: { Header, Item, Navigation },
  data() {
    return {
      store: {
        name: 'My Shopping Mall',
      },
      product: [
        // {
        //   product_no: 'asdf1234',
        //   name: '핏이 좋은 수트',
        //   image:
        //     'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/suit-1.png',
        //   price: 198000.0,
        //   original_price: 298000.0,
        //   description: '아주 잘 맞는 수트',
        // },
      ],
    };
  },
  computed: {
    isEven() {
      return this.product.length % 2 === 1;
    },
  },
  created() {
    getList({ type: 'item' })
      .then(({ data }) => {
        const { items } = data;

        this.product = items;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.item-list {
  width: 100%;
  padding-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
