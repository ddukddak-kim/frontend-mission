<template>
  <div>
    <div class="title-image">
      <img :src="image" alt="product-image" />
    </div>

    <div class="store">
      <div class="image" :style="{ 'background-image': `url('${profile_image}')` }"></div>
      <div>
        <div class="name">{{ name }}</div>
        <div class="hash">
          <a v-for="(item, index) of hash_tags" :key="index"># {{ item }}</a>
        </div>
      </div>
      <div class="favored" @click="clickAct">
        <font-awesome-icon :icon="store.isFavored ? ['fas', 'star'] : ['far', 'star']" />
      </div>
    </div>

    <div v-if="name === ''"></div>
    <div class="product" v-else>
      <div class="name">
        <a>{{ name }}</a>
      </div>
      <div class="price" v-if="original_price > 0">
        <div class="discount-percent">{{ discountPercent }}%</div>
        <div class="pay-price">{{ commaPrice }} 원</div>
        <div class="origin-price">
          <del>{{ commaOriginPrice }} 원</del>
        </div>
      </div>

      <div class="price" v-else>
        <div class="pay-price">{{ commaPrice }} 원</div>
      </div>
    </div>
  </div>
</template>

<script>
import { numberWithComma } from '@/utils/js/commonFunc';
import { postWish } from '@/utils/api/index';

export default {
  name: 'Title',
  props: {
    product_no: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    seller_no: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: '',
    },
    hash_tags: {
      type: Array,
      default: () => [],
    },
    profile_image: {
      type: String,
      default: '',
    },

    price: {
      type: Number,
      default: 0,
    },
    original_price: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      store: {
        isFavored: false,
      },
    };
  },
  methods: {
    clickAct() {
      this.store.isFavored = !this.store.isFavored;

      this.$store.state.isLoading = true;

      postWish({ itemNo: this.product_no })
        .then(({ status }) => {
          if (status !== 200) {
            throw new Error('찜하기 실패 했습니다.');
          }

          this.$store.state.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          this.$store.state.isLoading = false;
        });
    },
  },
  computed: {
    commaPrice() {
      return numberWithComma(this.price);
    },
    commaOriginPrice() {
      return numberWithComma(this.original_price);
    },
    discountPercent() {
      const discountedPrice = this.original_price - this.price;
      const percent = (discountedPrice / this.original_price) * 100;

      return Math.floor(percent);
    },
  },
};
</script>

<style>
.title-image img {
  width: 100%;
}

.store {
  min-height: 60px;
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid gainsboro;
}
.store div {
  margin-right: 10px;
}
.store div:nth-child(1) {
  min-width: 15%;
  margin-bottom: 5px;
}
.store div:nth-child(2) {
  min-width: 50%;
}
.store div:nth-child(3) {
  min-width: 15%;
}
.store div:last-child {
  margin-right: 0px;
}
.store .favored > svg {
  font-size: 1.8em;
}
.store .image {
  border-radius: 50%;
  border: 1px solid #000;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.store .name {
  width: max-content;
}
.store .hash {
  display: flex;
}
.store .hash > a {
  background: #f0f0f0;
  border-radius: 10px;
  padding: 3px 5px;
  margin-right: 5px;
}

.product {
  margin: 10px 15px;
}
.product .name {
  display: flex;
  justify-content: flex-start;
  font-size: 1.5em;
}
.product .price {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.product .price div {
  font-size: 1.3em;
  margin-right: 15px;
}
.product .price .discount-percent {
  margin-top: 3px;
  color: #f54949;
}
.product .price .origin-price {
  font-size: 0.8em;
  color: #ddd;
}
</style>
