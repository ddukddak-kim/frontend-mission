<template>
  <div class="content">
    <div class="product-info info">상품정보</div>
    <div class="sub-title info">{{subTitle}}</div>
    <div v-for="(item, index) of details" :key="index">
      <img class="detail-image" :src="item.image" alt= />
      <div class="detail-info info">{{ item.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data() {
    return {
      subTitle: '체형에 관계없이 누구에게나 맞는 수트!',
      details: [
        {
          image: require('../assets/img/detail/detail_01.jpg'),
          description: '연말 송년회에 아주 어울릴 수트 판매합니다!',
        },
        {
          image: require('../assets/img/detail/detail_02.jpg'),
          description: '부드러운 터치감과 고급스러운 컬러감을 제공합니다.',
        },
      ],
    };
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
