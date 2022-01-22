<template>
  <div class="item-list-header" data-test="store-name">{{ storeName }}</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    storeName: String,
  },
};
</script>

<style>
.item-list-header {
  margin: 20px 0;
  font-size: 1.5em;
}
</style>
