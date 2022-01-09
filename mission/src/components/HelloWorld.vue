<template>
  <div class='hello'>
    <h1>{{ msg }}</h1>

    <div>
      <input type='text' v-model='inputText'/>
      <button v-on:click='confirm'>제출</button>
      <button v-on:click='openNotice'>알림</button>
    </div>

    <div>
      <h2> {{ inputText }} </h2>
    </div>

    <Notice v-if='notice.isVisible' v-on:close='notice.isVisible=false'/>
  </div>
</template>

<script>
import Notice from './modals/Notice.vue';

export default {
	name: 'HelloWorld',
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
			},
		};
	},
	methods: {
		confirm() {
			this.inputText = this.inputText.substr(1) + this.inputText.substr(0, 1);
		},
		openNotice() {
			this.notice.isVisible = true;
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
