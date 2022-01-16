<template>
  <div id="item-info-page">
    <Title />
    <Detail />
  </div>
</template>

<script>
import Title from '@/components/Title.vue';
import Detail from '@/components/Detail.vue';

export default {
  name: 'ItemInfoPage',
  components: {
    Title,
    Detail,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
#item-info-page {
  margin: -8px;
}
</style>
