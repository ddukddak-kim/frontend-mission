<template>
  <div id="item-info-page">
    <Title
      :image="item.image"
      :seller_no="item.seller.seller_no"
      :name="item.seller.name"
      :hash_tags="item.seller.hash_tags"
      :profile_image="item.seller.profile_image"
      :price="item.price"
      :original_price="item.original_price"
    />
    <Detail :description="item.description" />
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
      item: {
        product_no: '',
        name: '',
        image: '',
        price: 0,
        original_price: 0,
        description: '',
        seller: {
          seller_no: 0,
          name: '',
          hash_tags: [],
          profile_image: '',
        },
        reviews: [
          {
            review_no: 0,
            writer: '',
            title: '',
            content: '',
            likes_count: 0,
            created: '',
            img: '',
          },
        ],
      },
      price: {
        isDiscount: true,
        discountPercent: 34,
        discountPrice: '198,000',
        originPrice: '200,000',
      },
    };
  },
  methods: {
    getDetailData() {
      const itemNo = this.$route.params.product_no;

      this.$store.state.isLoading = true;

      getItemDetail({ itemNo })
        .then(({ data }) => {
          const { item } = data;

          this.item = item;
          this.$store.state.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          this.$store.state.isLoading = false;
        });
    },
  },
  computed: {},
  created() {
    this.getDetailData();
  },
};
</script>

<style scoped>
#item-info-page {
  margin: -8px -8px 50px -8px;
}
</style>
