<template>
  <div>
    <h2>주문하기</h2>
    <div v-if="isEmptyCart">
      <p>주문 할 상품이 없습니다.</p>
      <div class="button" @click="backToCart">뒤로가기</div>
    </div>
    <div class="payment-info" v-else>
      <p>{{ orderPreview.itemName }} 포함 {{ carts.length }} 건 {{ 'price' }}원</p>
      <div class="input-container">
        <div class="input-label">주문자명</div>
        <div>
          <input type="text" class="input-text" />
        </div>
      </div>
      <div class="input-container">
        <div class="input-label">전화번호</div>
        <div>
          <input type="text" class="input-text" />
        </div>
      </div>
      <div class="input-container">
        <div class="input-label">수령주소</div>
        <div>
          <input type="text" class="input-text" />
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
    </div>
  </div>
</template>

<script>
import Strings from '@/utils/js/Strings';

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
    };
  },
  methods: {
    backToCart() {
      this.$router.push({
        name: 'CartList',
      });
    },
    moveComplete() {
      this.$router.push({
        name: 'PaymentComplete',
      });
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
        obj.totalCount = '';
        obj.totalPrice = '';
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
#item-info-page {
  margin: -8px -8px 50px -8px;
}

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
