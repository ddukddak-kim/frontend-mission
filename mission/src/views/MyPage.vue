<template>
  <!-- <div v-if="true" class="user-info"> -->
  <div v-if="isLogin" class="user-info">
    <div>
      <a>아이디</a>
      <input type="text" :value="$store.state.user.id" />
    </div>
    <div>
      <a>이름</a>
      <input type="text" :value="$store.state.user.username" />
    </div>
    <div>
      <a>이메일</a>
      <input type="text" :value="$store.state.user.email" />
    </div>

    <div class="button right" @click="moveLogin">정보 수정</div>
    <div class="button right" @click="moveLogin">로그아웃</div>
  </div>
  <div v-else class="login-alert">
    <a>{{ STRINGS.LOGIN_FIRST }}</a>
    <div class="button" @click="moveLogin">로그인</div>
  </div>
</template>

<script>
import { getItemDetail } from '@/utils/api/index';
import Strings from '@/utils/js/Strings';

export default {
  name: 'MyPage',
  props: {},

  data() {
    return {
      isLogin: false,
      editable: false,
    };
  },
  components: {},
  methods: {
    moveLogin() {
      this.$router.push({
        name: 'Login',
      });
    },
    checkLogin() {
      this.isLogin = this.$store.state.user.id !== '';
    },
  },
  computed: {
    STRINGS() {
      return Strings;
    },
  },
  created() {
    this.isLogin = this.$store.state.user.id !== '';
  },
};
</script>

<style scoped>
.user-info {
  /* width: 100%; */
  position: absolute;
  top: calc(50% - 160px);
  left: calc(50% - 110px);
}
.user-info div {
  /* width: 100px; */
  margin: 10px 0;
}
.user-info div a {
  width: 50px;
  margin-right: 10px;
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
.right {
  float: right;
}
</style>
