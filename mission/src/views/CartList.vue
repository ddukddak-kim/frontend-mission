<template>
  <div id="item-list-page">
    <Header v-bind:storeName="store.name" data-test="store-name" />
    <div class="item-list cart">
      <Item
        data-test="item"
        v-for="(item, index) of carts"
        :key="index"
        :product="item"
        @click="moveDetail(item)"
      />
      <Item v-if="isEven" :isEmpty="true" data-test="empty-item" />
    </div>

    <div class="purchase-button button" @click="purchase">구매하러 가기</div>
    <Navigation />
    <Loading />
  </div>
</template>

<script>
import Header from '@/components/ItemList/Header.vue';
import Navigation from '@/components/ItemList/Navigation.vue';
import Item from '@/components/ItemList/Item.vue';
import Loading from '@/components/Loading.vue';
import RepositoryFactory from '@/repositories/RepositoryFactory';

const CartRepository = RepositoryFactory.get('cart');

export default {
  name: 'CartList',
  components: {
    Header,
    Item,
    Navigation,
    Loading,
  },
  data() {
    return {
      store: {
        name: 'My Shopping Mall',
      },
      carts: [],
    };
  },
  methods: {
    async getCartList() {
      this.$store.state.isLoading = false;

      const { data } = await CartRepository.getCartList();
      this.carts = data.cart_item;
    },

    purchase() {
      this.$router.push({
        name: 'Payment',
      });
    },
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    isEven() {
      return this.carts.length % 2 === 1;
    },
  },
  created() {
    this.getCartList();
  },
};
</script>

<style>
.cart {
  padding-bottom: 60px;
  /* width: calc(100% - 100px); */
  /*
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; */
}
.purchase-button {
  position: fixed;
  left: 30%;
  bottom: 80px;
}
</style>
