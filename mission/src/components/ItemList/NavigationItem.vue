<template>
  <div class="nav-item" data-test="navigation-item" @click="moveMenu">
    <font-awesome-icon :icon="customIcon" />
    <div>{{menuName}}</div>
  </div>
</template>

<script>
export default {
  name: 'NavigationItem',
  props: {
    iconType: String,
  },
  methods: {
    moveMenu() {
      if (this.iconType === 'myPage') {
        // window.location = '/myPage';
        this.$router.push({
          name: 'MyPage',
        });
      } else {
        this.$store.commit({ type: 'movePage', pageType: this.iconType });
      }
    },
  },
  computed: {
    menuName() {
      return this.iconType === 'item' ? 'home' : this.iconType;
    },
    customIcon() {
      const type = !this.iconType ? '' : this.iconType;
      let icon = '';

      switch (type) {
        case 'item':
          icon = ['fas', 'home'];
          break;
        case 'wish':
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
