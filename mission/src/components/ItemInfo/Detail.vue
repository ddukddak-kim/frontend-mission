<template>
  <div class="content">
    <div class="product-info info">상품정보</div>
    <div class="detail-info" v-html="description"></div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    description: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.info {
  margin: 10px 15px;
}
.product-info {
  font-size: 1.2em;
}
.sub-title {
  font-size: 1em;
  font-weight: bold;
}

.detail-image {
  width: 100%;
}
</style>
