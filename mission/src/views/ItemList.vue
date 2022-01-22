<template>
  <div id="item-list-page">
    <Header v-bind:storeName="store.name" data-test="store-name" />
    <Navigation />
  </div>
</template>

<script>
import Header from '@/components/ItemList/Header.vue';
import Navigation from '@/components/ItemList/Navigation.vue';

export default {
  name: 'ItemListPage',
  components: { Header, Navigation },
  data() {
    return {
      store: {
        name: 'My Shopping Mall',
      },
    };
  },
};
</script>

<style></style>
