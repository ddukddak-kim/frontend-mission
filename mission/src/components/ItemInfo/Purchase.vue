<template>
  <div class="purchase">
    <div class="button">{{ commaPrice }}원 구매</div>
  </div>
</template>

<script>
import { numberWithComma } from '@/utils/js/commonFunc';

export default {
  name: 'Purchase',
  props: {
    price: {
      type: String,
      default: '',
    },
  },
  computed: {
    commaPrice() {
      return numberWithComma(this.price);
    },
  },
};
</script>

<style>
.purchase {
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  min-height: 50px;
  background: #fff;
  border-top: 1px solid #ddd;
}
.button {
  width: 40%;
  min-height: 40px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 2px #808080;
  font-size: 1.2em;
}
</style>
