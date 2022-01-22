<template>
  <div>
    <div class="title-image">
      <img :src="product.image" alt="product-image" />
    </div>

    <div class="store">
      <div class="image" :style="{'background-image': `url('${store.image}')`}"></div>
      <div>
        <div class="name">{{ store.name }}</div>
        <div class="hash">
          <a v-for="(item,index) of store.hash" :key="index"># {{item.name}}</a>
        </div>
      </div>
      <div>즐겨찾기</div>
    </div>

    <div class="product">
      <div class="name">
        <a>{{ product.name }}</a>
      </div>

      <div class="price" v-if="price.isDiscount">
        <div class="discount-percent">{{ price.discountPercent }}%</div>
        <div class="pay-price">{{ price.discountPrice }} 원</div>
        <div class="origin-price">
          <del>{{ price.originPrice }} 원</del>
        </div>
      </div>
      <div class="price" v-else>
        <div class="pay-price">{{ price.originPrice }} 원</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    price: Object,
  },
  data() {
    return {
      store: {
        image: require('../assets/img/title/store_01.jpg'),
        name: '대한양복',
        hash: [
          {
            name: 'tag1',
            code: '01',
          },
          {
            name: 'tag2',
            code: '02',
          },
        ],
      },
      product: {
        image: require('../assets/img/title/title_01.jpg'),
        name: '핏이 좋은 수트',
      },
    };
  },
  methods: {},
  computed: {},
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
