<template>
  <div>
    <div class="title-image">{{ titleImage }}</div>

    <div class="store">
      <div>{{ store.image }}</div>
      <div>
        <div>대한양복</div>
        <div>#tag1 #tag1</div>
      </div>
      <div>즐겨찾기</div>
    </div>
    <div class="product">
      <div class="name">
        <a>{{ product.name }}</a>
      </div>
      <div class="price">
        <div class="discount-percent">{{ price.discountPercent }}%</div>
        <div class="discount-price">{{ price.discountPrice }} 원</div>
        <div class="origin-price">
          <del>{{ price.originPrice }} 원</del>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  data() {
    return {
      titleImage: 'img1',
      store: {
        image: 'img2',
        name: '',
        hashs: [],
      },
      product: {
        name: '핏이 좋은 수트',
      },
      price: {
        discountPercent: 34,
        discountPrice: '198000',
        originPrice: '200000',
      },
    };
  },
};
</script>

<style>
.title-image {
  border: 1px solid rebeccapurple;
  min-height: 300px;
}
.store {
  min-height: 60px;
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid gainsboro;
}
.store div:nth-child(1) {
  min-width: 15%;
}
.store div:nth-child(2) {
  min-width: 70%;
}
.store div:nth-child(3) {
  min-width: 15%;
}
.product {
  margin: 10px;
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
  color: #b3b3b3;
}
</style>
