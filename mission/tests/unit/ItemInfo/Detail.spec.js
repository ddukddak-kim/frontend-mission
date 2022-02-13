import { shallowMount } from '@vue/test-utils';
import Detail from '@/components/ItemInfo/Detail.vue';

describe('ItemInfoPage', () => {
  const wrapper = shallowMount(Detail);

  it('renders detail items', async () => {
    expect(wrapper.find('.product-info').exists()).toBe(true);
    expect(wrapper.find('.detail-info').exists()).toBe(true);
  });
});
