<template>
  <div id="item-info-page">
    <Title />
    <Detail />
    <Review />
    <Purchase class="purchase" price="299,000" />
  </div>
</template>

<script>
import Title from '@/components/Title.vue';
import Detail from '@/components/Detail.vue';
import Review from '@/components/Review.vue';
import Purchase from '@/components/Purchase.vue';

export default {
  name: 'ItemInfoPage',
  components: {
    Title,
    Detail,
    Review,
    Purchase,
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
  margin: -8px 0 50px 0;
}

.purchase {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  min-height: 50px;
  background: #fff;
  border-top: 1px solid #ddd;
  /* position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  min-height: 50px;
  background: red; */
}
</style>
