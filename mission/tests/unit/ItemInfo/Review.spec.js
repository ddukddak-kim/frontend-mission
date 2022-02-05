import { shallowMount } from '@vue/test-utils';
import Review from '@/components/ItemInfo/Review.vue';

describe('ItemInfoPage', () => {
  const wrapper = shallowMount(Review);

  it('renders review page', async () => {
    expect(wrapper.find('.content').exists()).toBe(true);
  });
});
