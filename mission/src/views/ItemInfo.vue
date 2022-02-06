<template>
  <div id="item-info-page">
    <!-- {{ $route.params.product_no}} -->
    <Title v-bind:price="price" />
    <Detail />
    <Review />
    <Purchase v-bind:price="price.isDiscount ? price.discountPrice : price.originPrice" />
    <Loading />
  </div>
</template>

<script>
import Title from '@/components/ItemInfo/Title.vue';
import Detail from '@/components/ItemInfo/Detail.vue';
import Review from '@/components/ItemInfo/Review.vue';
import Purchase from '@/components/ItemInfo/Purchase.vue';
import Loading from '@/components/Loading.vue';

import { getItemDetail } from '@/utils/api/index';

export default {
  name: 'ItemInfo',
  props: {
    product_no: {
      type: String,
      default: '',
    },
  },
  components: {
    Title,
    Detail,
    Review,
    Purchase,
    Loading,
  },
  data() {
    return {
      price: {
        isDiscount: true,
        discountPercent: 34,
        discountPrice: '198,000',
        originPrice: '200,000',
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
#item-info-page {
  margin: -8px -8px 50px -8px;
}
</style>
