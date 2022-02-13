<template>
  <div class="loading" v-if="this.$store.state.isLoading">
    <a>{{ STRINGS.LOADING }}</a>
  </div>
</template>

<script>
import Strings from '@/utils/js/Strings';

export default {
  name: 'Loading',
  computed: {
    STRINGS() {
      return Strings;
    },
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
</style>
