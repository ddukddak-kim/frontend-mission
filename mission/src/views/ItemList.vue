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
          name: '극세사 잠옷',
          price: '15000',
          discountPrice: '10000',
          description: '꿀잠 가능합니다.',
          /* eslint-disable global-require */
          img: require('@/assets/img/list/item_01.jpg'),
        },
        {
          id: '2',
          name: '방한 모자',
          price: '20000',
          discountPrice: '18000',
          description: '따뜻한 모자예요. 털이 아주 부드럽습니다.',
          /* eslint-disable global-require */
          img: require('@/assets/img/list/item_02.jpg'),
        },
        {
          id: '3',
          name: '스마트 장갑',
          price: '21000',
          discountPrice: '',
          description: '터치 가능한 장갑입니다.',
          /* eslint-disable global-require */
          img: require('@/assets/img/list/item_03.jpg'),
        },
        {
          id: '4',
          name: '행복 넥타이',
          price: '30000',
          discountPrice: '',
          description: '무지개 색입니다.',
          /* eslint-disable global-require */
          img: require('@/assets/img/list/item_04.jpg'),
        },
        {
          id: '5',
          name: 'EVA 폼롤러',
          price: '50000',
          discountPrice: '47000',
          description: '스트레칭하기 좋아요. 거북목 교정용으로 좋습니다.',
          /* eslint-disable global-require */
          img: require('@/assets/img/list/item_05.jpg'),
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
