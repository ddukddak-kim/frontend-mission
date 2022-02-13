<template>
  <div>
    <h2>주문하기</h2>
    <p>{{ 'name' }} 포함 {{ 'count' }} 건 {{ 'price' }}원</p>
    <div class="payment-info">
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
          <label><input type="radio" value="01" name="deliveryType" />택배</label>
          <label><input type="radio" value="02" name="deliveryType" />퀵배송</label>
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

      <div class="button" @click="login">주문하기</div>
    </div>
  </div>
</template>

<script>
import { postLogin } from '@/utils/api/index';
import Strings from '@/utils/js/Strings';

export default {
  name: 'Login',
  components: {},
  props: {},

  data() {
    return {
      isLogin: false,
      id: '',
      password: '',
    };
  },
  methods: {
    checkLogin() {
      this.isLogin = this.$store.state.user.id !== '';
    },
    login() {
      this.$store.state.isLoading = true;

      postLogin({ id: this.id, password: this.password })
        .then(({ status, data }) => {
          if (status !== 200) {
            throw new Error('로그인 실패 했습니다.');
          }

          this.$store.state.user.id = this.id;
          this.$store.state.user.api_key = data.api_key;

          this.moveMain();
        })
        .catch((error) => {
          console.log(error);
          this.$store.state.isLoading = false;
        });
    },

    moveMain() {
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
  created() {
    this.checkLogin();
  },
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
