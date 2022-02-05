<template>
  <div class="content">
    <div class="product-info info">리뷰</div>
    <div class="review-card" v-for="(item, index) of reviews" :key="index">
      <div>
        {{ maskingId(item.user) }}
        <a class="regist-date">{{ item.registDate }}</a>
      </div>
      <div class="contents">
        <div class="review-info">
          <p class="title">{{ item.title }}</p>
          {{ item.comment }}
        </div>
        <div class="image" :style="{ 'background-image': `url('${item.image}')` }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Review',
  data() {
    return {
      reviews: [
        {
          user: 'user01',
          title: '만족해요',
          comment: '핏이 아주 잘 맞습니다. 대만족-!',
          /* eslint-disable global-require */
          image: require('@/assets/img/detail/detail_01.jpg'),
          registDate: '2022.01.01',
        },
        {
          user: 'likeon022',
          title: '22만족해요',
          comment: '22핏이 아주 잘 맞습니다. 대만족-!',
          /* eslint-disable global-require */
          image: require('@/assets/img/detail/detail_01.jpg'),
          registDate: '2022.01.01',
        },
      ],
    };
  },
  computed: {
    maskingId() {
      return function maskingId(user) {
        if (!user) return '';

        const res = user.substring(0, 3) + '*'.repeat(user.length - 3);
        return res;
      };
    },
  },
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
  width: fit-content;
}

.review-card .regist-date {
  color: #ababab;
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

.review-card .image {
  width: 60px;
  height: 60px;
  border: 1px solid;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
