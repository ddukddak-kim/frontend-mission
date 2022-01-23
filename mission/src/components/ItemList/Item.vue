<template>
  <div class="item-list-item">
    <div v-if="isEmpty" class="empty"></div>
    <div v-else class="item">
      <div
        class="image"
        :style="{ 'background-image': `url('${!product.img ? '' : product.img}')` }"
      ></div>
      <div class="price-info">
        <a class="percent" v-if="isDiscount">{{ discountPercent }}%</a>
        <a class="purchase-price">{{ purchasePrice }} 원</a>
      </div>
      <div class="product-name">
        <a>{{ product.name }}</a>
      </div>
      <div>
        <a>{{ product.description }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemListItem',
  props: {
    product: Object,
    isEmpty: Boolean,
  },
  data() {
    return {};
  },
  computed: {
    isDiscount() {
      return this.product.discountPrice.trim().length > 0;
    },
    purchasePrice() {
      return this.isDiscount ? this.product.discountPrice : this.product.price;
    },
    discountPercent() {
      const discountedPrice = this.product.price - this.product.discountPrice;
      const percent = (discountedPrice / this.product.price) * 100;
      return Math.floor(percent);
    },
    // todo
    // requireImage() {
    //   /* eslint-disable global-require */
    //   return require(this.product.img);
    // },
  },
};
</script>

<style>
.item-list-item {
  width: calc(50% - 15px);
  margin-bottom: 15px;
}

.item-list-item .item > div {
  width: max-content;
  margin-bottom: 8px;
}

.item-list-item .item .image {
  width: 100%;
  padding-bottom: 100%;
  margin-bottom: 10px;
  border: 2px solid#747474;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.item .price-info {
  font-weight: bold;
  font-size: 1.2em;
}
.item .price-info .percent {
  padding-right: 10px;
  color: #d81a2c;
}
.item .price-info .purchase-price {
  color: #005666;
}

.item .product-name {
  font-size: 1.2em;
  font-weight: bold;
  color: #7a7878;
}
</style>
