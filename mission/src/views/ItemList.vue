<template>
  <div id="item-list-page">
    <Header v-bind:storeName="store.name" data-test="store-name" />
    <div class="item-list">
      <Item
        data-test="item"
        v-for="(item, index) of products"
        :key="index"
        :product="item"
        @click="moveDetail(item)"
      />
      <Item v-if="isEven" :isEmpty="true" data-test="empty-item" />
    </div>
    <Navigation />
    <Loading />
  </div>
</template>

<script>
import Header from '@/components/ItemList/Header.vue';
import Navigation from '@/components/ItemList/Navigation.vue';
import Item from '@/components/ItemList/Item.vue';
import Loading from '@/components/Loading.vue';

export default {
  name: 'ItemListPage',
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
    };
  },
  methods: {
    /* eslint-disable camelcase */
    moveDetail({ product_no }) {
      this.$router.push({
        name: 'ItemInfo',
        /* eslint-disable camelcase  */
        params: { product_no },
      });
    },
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    isEven() {
      return this.products.length % 2 === 1;
    },
  },
  created() {
    this.$store.commit({
      type: 'movePage',
      pageType: this.$store.state.pageType,
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
