<template>
  <div class="user-info">
    <p>
      <a>아이디</a>
      <input type="text" v-model="id" />
    </p>
    <p>
      <a>비밀번호</a>
      <input type="password" v-model="password" />
    </p>

    <div class="button" @click="login">로그인</div>
  </div>
</template>

<script>
import { postLogin } from '@/utils/api/index';
import Strings from '@/utils/js/Strings';

export default {
  name: 'Login',
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

.user-info {
  position: absolute;
  top: calc(50% - 160px);
  left: calc(50% - 110px);
}
.user-info > p a {
  min-width: 100px;
}

.login-alert {
  background: #00000070;
  height: 1000px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.login-alert > a {
  position: relative;
  top: 40%;
  font-size: xx-large;
  font-weight: bold;
  text-shadow: 4px 2px 2px grey;
  color: #ddd;
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
