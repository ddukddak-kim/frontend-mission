<template>
  <div id="item-info-page">
    <Title
      :product_no="item.product_no"
      :image="item.image"
      :seller_no="item.seller.seller_no"
      :name="item.seller.name"
      :hash_tags="item.seller.hash_tags"
      :profile_image="item.seller.profile_image"
      :price="item.price"
      :original_price="item.original_price"
    />
    <Detail :description="item.description" />
    <Review :reviews="item.reviews" />
    <Purchase v-bind:price="item.price" />
    <Loading />
  </div>
</template>

<script>
import Title from '@/components/ItemInfo/Title.vue';
import Detail from '@/components/ItemInfo/Detail.vue';
import Review from '@/components/ItemInfo/Review.vue';
import Purchase from '@/components/ItemInfo/Purchase.vue';
import Loading from '@/components/Loading.vue';

import RepositoryFactory from '@/repositories/RepositoryFactory';

const ItemRepository = RepositoryFactory.get('item');

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
    async getItemDetail() {
      this.$store.state.isLoading = true;

      const { data } = await ItemRepository.getItemDetail(this.product_no);
      this.$store.state.isLoading = false;

      this.item = data.item;
    },
  },
  computed: {},
  created() {
    this.getItemDetail();
  },
};
</script>

<style scoped>
#item-info-page {
  margin: -8px -8px 50px -8px;
}
</style>
