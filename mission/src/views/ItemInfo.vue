<template>
  <div id="item-info-page">
    <Title />
    <Detail />
    <Review />
  </div>
</template>

<script>
import Title from '@/components/Title.vue';
import Detail from '@/components/Detail.vue';
import Review from '@/components/Review.vue';

export default {
  name: 'ItemInfoPage',
  components: {
    Title,
    Detail,
    Review,
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
