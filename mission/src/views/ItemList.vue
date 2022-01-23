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

export default {
  name: 'ItemListPage',
  components: { Header, Item, Navigation },
  data() {
    return {
      store: {
        name: 'My Shopping Mall',
      },
      product: [
        {
          id: '1',
          name: '잠옷',
          price: '',
          discountPrice: '',
          description: '꿀잠가능합니다.',
          /* eslint-disable global-require */
          img: require('@/assets/img/title/store_01.jpg'),
        },
        {
          id: '2',
          name: '모자',
          price: '',
          discountPrice: '',
          description: '따뜻한 모자예요.',
          /* eslint-disable global-require */
          img: require('@/assets/img/title/store_01.jpg'),
        },
        {
          id: '3',
          name: '장갑',
          price: '',
          discountPrice: '',
          description: '터치장갑입니다.',
          /* eslint-disable global-require */
          img: require('@/assets/img/title/store_01.jpg'),
        },
        {
          id: '4',
          name: '넥타이',
          price: '',
          discountPrice: '',
          description: '무지개색입니다.',
          /* eslint-disable global-require */
          img: require('@/assets/img/title/store_01.jpg'),
        },
        {
          id: '5',
          name: '폼롤러',
          price: '',
          discountPrice: '',
          description: '스트레칭하기 좋아요.',
          /* eslint-disable global-require */
          img: require('@/assets/img/title/store_01.jpg'),
        },
      ],
    };
  },
  computed: {
    isEven() {
      return this.product.length % 2 === 1;
    },
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
