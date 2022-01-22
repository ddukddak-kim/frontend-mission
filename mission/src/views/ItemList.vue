<template>
  <div id="item-list-page">
    <Header v-bind:storeName="store.name" data-test="store-name" />
  </div>
</template>

<script>
import Header from '@/components/ItemList/Header.vue';

export default {
  name: 'ItemListPage',
  components: { Header },
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
