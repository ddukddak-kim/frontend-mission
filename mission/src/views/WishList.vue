<template>
  <div id="item-list-page">
    <Header v-bind:storeName="store.name" data-test="store-name" />
    <h3>위시 리스트</h3>
    <div class="wish-list">
      <Item
        data-test="item"
        v-for="(item, index) of wishes"
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
import RepositoryFactory from '@/repositories/RepositoryFactory';

const WishRepository = RepositoryFactory.get('wish');

export default {
  name: 'WishList',
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
      wishes: [],
    };
  },
  methods: {
    async getWishList() {
      const { data } = await WishRepository.getItemList();
      this.$store.state.isLoading = false;
      this.wishes = data.items;
    },
  },
  computed: {
    isEven() {
      return this.wishes.length % 2 === 1;
    },
  },
  created() {
    this.getWishList();
  },
};
</script>

<style>
.wish-list {
  width: 100%;
  padding-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
