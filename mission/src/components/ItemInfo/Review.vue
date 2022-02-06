<template>
  <div class="content">
    <div class="product-info info">리뷰</div>
    <div v-if="reviews[0].review_no === 0">{{ STRINGS.NO_REVIEW }}</div>
    <div
      v-else
      class="review-card"
      v-for="(item, index) of reviews"
      :key="index"
      data-no="item.review_no"
    >
      <div>
        <a class="writer">{{ item.writer }}</a>
        <a class="regist-date">{{ item.created }}</a>
      </div>
      <div class="contents">
        <div class="review-info">
          <p class="title">{{ item.title }}</p>
          <p class="content">{{ item.content }}</p>
          <br />
          <a class="likes">
            <a>좋아요</a>
            {{ item.likes_count }}
          </a>
        </div>

        <div class="image" :style="{ 'background-image': `url('${item.img}')` }"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Strings from '@/utils/js/Strings';

export default {
  name: 'Review',
  props: {
    reviews: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    STRINGS() {
      return Strings;
    },
  },
  methods: {},
  watch: {},
};
</script>

<style>
.content {
  margin: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.info {
  margin-bottom: 10px;
}
.product-info {
  font-size: 1.2em;
}
.sub-title {
  font-size: 1em;
  font-weight: bold;
}

.detail-image {
  width: 100%;
}

.review-card {
  width: calc(100% - 20px);
  padding: 10px;
  border-bottom: 2px solid #ddd;
}
.review-card div:first-child {
  width: 100%;
  text-align: left;
}

.review-card .writer {
  padding-right: calc(10%);
}
.review-card .regist-date {
  color: #ababab;
  padding-right: calc(10%);
}

.likes {
  margin-top: 10px;
  color: #70a3ff;
  font-weight: bold;
}
.likes > a {
  background: #70a3ff;
  color: #fff;
  padding: 5px;
  border-radius: 10px;
}

.review-card .contents {
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: row;
}
.review-card .contents .review-info {
  width: 100%;
}
.review-card .contents .title {
  margin: 0px;
  font-weight: bold;
}
.review-card .contents .content {
  margin: 0px;
}

.review-card .image {
  width: 30%;
  padding-bottom: 25%;
  margin-bottom: 10px;
  border: 1px solid;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
