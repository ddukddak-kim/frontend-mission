import { shallowMount } from '@vue/test-utils';
import Review from '@/components/ItemInfo/Review.vue';

describe('ItemInfoPage', () => {
  it('render when empty review', () => {
    const wrapper = shallowMount(Review, {
      props: {
        reviews: [{ review_no: 0 }],
      },
    });
    expect(wrapper.find('[data-test="no-review"]').exists()).toBe(true);
  });
});
