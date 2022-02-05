<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>
      <input type="text" v-model="inputText" />
      <button class="submit" @click="submit">제출</button>
      <button class="notice" @click="openNotice">알림</button>
    </div>

    <div>
      <h2>{{ inputText }}</h2>
    </div>

    <Notice
      v-if="notice.isVisible"
      @close="notice.isVisible=false"
      :comment="inputText"
      :count="notice.count"
    />
  </div>
</template>

<script>
import Notice from './modals/Notice.vue';

export default {
  name: 'Main',
  components: {
    Notice,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      inputText: '',
      notice: {
        isVisible: false,
        count: 0,
      },
    };
  },
  methods: {
    submit() {
      this.inputText = this.inputText.substr(1) + this.inputText.substr(0, 1);
    },
    openNotice() {
      this.notice.isVisible = true;
      this.notice.count += 1;
    },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
