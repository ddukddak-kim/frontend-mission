<template>
  <div>
    <div class="title-image">img</div>

    <div class="store">
      <div>img</div>
      <div>
        <div>대한양복</div>
        <div>#tag1 #tag1</div>
      </div>
      <div>즐겨찾기</div>
    </div>

    <div class="price">
      <div class="discount-percent">34%</div>
      <div>198,000 원</div>
      <div>200,000 원</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
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
.price {
  margin: 10px;
  display: flex;
  justify-content: flex-start;
}
.price div {
  margin-right: 10px;
}
.price .discount-percent {
  margin-top: 3px;
}
</style>
