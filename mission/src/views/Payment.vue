<template>
  <div>
    <h2>주문하기</h2>
    <div v-if="isEmptyCart" data-test="emptyCart">
      <p>주문 할 상품이 없습니다.</p>
      <div class="button" @click="backToCart">뒤로가기</div>
    </div>
    <div v-else>
      <div class="preview">
        {{ orderPreview.itemName }} 포함 {{ carts.length }} 건 {{ orderPreview.totalPrice }}원
      </div>
      <div class="payment-info">
        <div class="input-container">
          <div class="input-label">주문자명 <a class="validation-message">*</a></div>
          <div>
            <input type="text" class="input-text" v-model="order.orderer" />
          </div>
        </div>
        <div class="input-container">
          <div class="input-label">전화번호 <a class="validation-message">*</a></div>
          <div>
            <input type="text" class="input-text" v-model="order.phoneNumber" />
          </div>
        </div>
        <div class="input-container">
          <div class="input-label">수령주소 <a class="validation-message">*</a></div>
          <div>
            <input type="text" class="input-text" v-model="order.adddress" />
          </div>
        </div>
        <div class="input-container">
          <div class="input-label">배송방법</div>
          <div>
            <label>
              <input type="radio" value="01" name="deliveryType" v-model="order.deliveryType" />
              택배
            </label>
            <label>
              <input type="radio" value="02" name="deliveryType" v-model="order.deliveryType" />
              퀵배송
            </label>
          </div>
        </div>

        <div class="input-container">
          <div class="input-label">결제방법</div>
          <div class="dual">
            <div class="dual-button">
              <font-awesome-icon :icon="['fas', 'credit-card']" /><br />
              <a>신용/체크카드</a>
            </div>
            <div class="dual-button">
              <font-awesome-icon :icon="['fas', 'money-bill']" /><br />
              <a>계좌이체</a>
            </div>
          </div>
        </div>

        <div class="button" @click="moveComplete">주문하기</div>
        <p class="validation-message">{{ validateMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Strings from '@/utils/js/Strings';
import { numberWithComma } from '@/utils/js/commonFunc';

export default {
  name: 'Payment',
  components: {},
  props: {},

  data() {
    return {
      order: {
        orderer: '',
        phoneNumber: '',
        adddress: '',
        deliveryType: '01',
      },
      validateMessage: '',
    };
  },
  methods: {
    backToCart() {
      this.$router.push({
        name: 'CartList',
      });
    },
    moveComplete() {
      if (
        this.order.orderer === ''
        || this.order.phoneNumber === ''
        || this.order.adddress === ''
      ) {
        this.validateMessage = '필수 값 입력해 주세요.';
      } else {
        this.validateMessage = '';
        this.$router.push({
          name: 'PaymentComplete',
        });
      }
    },
  },
  computed: {
    carts() {
      return this.$store.state.carts;
    },
    isEmptyCart() {
      return this.$store.state.carts.length === 0;
    },
    orderPreview() {
      const obj = {
        itemName: '',
        totalCount: '',
        totalPrice: '',
      };

      if (!this.isEmptyCart) {
        obj.itemName = this.$store.state.carts[0].name;
        obj.totalCount = this.$store.state.carts.length;
        obj.totalPrice = this.$store.state.carts.reduce((sum, { price }) => sum + price, 0);

        obj.totalPrice = numberWithComma(obj.totalPrice);
      }

      return obj;
    },
    STRINGS() {
      return Strings;
    },
  },
  created() {},
};
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}
.payment-info {
  position: absolute;
  top: calc(20%);
  left: calc(28%);
}
.payment-info > p a {
  min-width: 100px;
}
.preview {
  font-size: 1.2em;
}
.dual {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
}
.dual-button {
  border: 1px #ddd solid;
  width: calc(100% - 10px);
  padding-top: 4px;
}
.dual-button > a {
  font-size: 0.7em;
}
.validation-message {
  color: crimson;
}

.button {
  position: relative;
  top: 42%;
  width: 60%;
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
