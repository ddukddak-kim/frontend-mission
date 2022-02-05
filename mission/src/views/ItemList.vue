<template>
  <div id="item-list-page">
    <Header v-bind:storeName="store.name" data-test="store-name" />
    <div class="item-list">
      <Item v-for="(item, index) of products" :key="index" :product="item" />
      <Item v-if="isEven" :isEmpty="true" data-test="empty-item" />
    </div>
    <Navigation />
    <div class="loading" v-if="this.$store.state.isLoading">
      <a>Loading..</a>
    </div>
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
    };
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
    this.$store.commit({ type: 'movePage', pageType: 'item' });
  },
};
</script>

<style>
.loading {
  background: #00000070;
  height: 1000px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.loading > a {
  position: relative;
  top: 40%;
  font-size: xx-large;
  font-weight: bold;
  text-shadow: 4px 2px 2px grey;
  color: #ddd;
}
.item-list {
  width: 100%;
  padding-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
