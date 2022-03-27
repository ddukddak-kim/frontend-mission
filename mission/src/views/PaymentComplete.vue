<template>
  <div class="payment-complete">
    <font-awesome-icon :icon="['fas', 'check']" class="icon" />
    <h2>주문이 완료 되었습니다.</h2>
    <div class="button" @click="moveHome">홈으로</div>
  </div>
</template>

<script>
import Strings from '@/utils/js/Strings';

export default {
  name: 'PaymentComplete',
  props: {},

  data() {
    return {
      isLogin: false,
      id: '',
      password: '',
    };
  },
  components: {},
  methods: {
    moveHome() {
      this.$router.push({
        name: 'Home',
      });
    },
  },
  computed: {
    STRINGS() {
      return Strings;
    },
  },
  created() {},
};
</script>

<style scoped>
.payment-complete {
  position: absolute;
  top: 40%;
  left: 18%;
}
.icon {
  font-size: 1.5em;
}
.button {
  position: relative;
  top: 42%;
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
