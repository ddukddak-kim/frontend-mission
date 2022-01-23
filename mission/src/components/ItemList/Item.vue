<template>
  <div class="item-list-item">
    <div v-if="isEmpty" class="empty"></div>
    <div v-else class="item">
      <div
        class="image"
        :style="{ 'background-image': `url('${ !product.img ? '' : product.img }')` }"
      ></div>
      <div class="price-info">
        <a class="percent">11%</a>
        <a>13,400 원</a>
      </div>
      <div class="product-name">
        <a>product 1</a>
      </div>
      <div>
        <a>desc</a>
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
};
</script>

<style>
.item-list-item {
  width: calc(50% - 10px);
  margin-bottom: 10px;
}

.item-list-item .item > div {
  width: max-content;
  margin-bottom: 5px;
}

.item-list-item .item .image {
  width: 100%;
  height: 100px;
  border: 2px solid#747474;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.item .percent {
  padding-right: 10px;
  color: #d81a2c;
}

.item .price-info {
  font-size: 1.2em;
}

.item .product-name {
  font-size: 1.2em;
  font-weight: bold;
  color: #7a7878;
}
</style>
