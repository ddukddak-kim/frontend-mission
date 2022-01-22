<template>
  <div class="nav-item" data-test="navigation-item">
    <font-awesome-icon :icon="customIcon" />
    <div>{{iconType}}</div>
  </div>
</template>

<script>
export default {
  name: 'NavigationItem',
  props: {
    iconType: String,
  },
  computed: {
    customIcon() {
      const type = !this.iconType ? '' : this.iconType;
      let icon = '';

      switch (type) {
        case 'home':
          icon = ['fas', 'home'];
          break;
        case 'favored':
          icon = ['fas', 'heart'];
          break;
        case 'cart':
          icon = ['fas', 'shopping-cart'];
          break;
        case 'myPage':
          icon = ['fas', 'phone'];
          break;
        default:
          icon = ['fa', 'times'];
          break;
      }

      return icon;
    },
  },
};
</script>

<style>
.nav-item {
}
</style>
