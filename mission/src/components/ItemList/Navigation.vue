<template>
  <div class="navigation" data-test="navigation">
    <Item iconType="home" class="select" />
    <Item iconType="favored" />
    <Item iconType="cart" />
    <Item iconType="myPage" />
  </div>
</template>

<script>
import Item from '@/components/ItemList/NavigationItem.vue';

export default {
  name: 'Navigation',
  components: { Item },
  props: {},
};
</script>

<style>
.navigation {
  width: 100%;
  min-height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0px;
  left: 0px;
  border-top: 1px solid #ddd;
}
.navigation .select {
  /*box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;*/
}
</style>
