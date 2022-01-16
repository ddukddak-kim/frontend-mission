<template>
  <div class="purchase">
    <div class="button">{{ price }}원 구매</div>
  </div>
</template>

<script>
export default {
  name: 'Purchase',
  props: {
    price: String,
  },
};
</script>

<style>
.purchase {
  display: flex;
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
  font-size: 1.3em;
}
</style>
