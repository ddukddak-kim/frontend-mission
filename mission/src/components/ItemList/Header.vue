<template>
  <div class="header" :class="{ hidden: isHidden }">
    {{ storeName }}
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    storeName: String,
  },
  data() {
    return {
      isHidden: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      this.isHidden = window.pageYOffset > 0;
    },
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-bottom: 8px;
  font-size: 1.7em;
  background: #fff;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}
.header.hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>
