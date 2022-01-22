import { shallowMount } from '@vue/test-utils';
import Detail from '@/components/Detail.vue';

describe('ItemInfoPage', () => {
  const wrapper = shallowMount(Detail);

  it('renders detail title', async () => {
    expect(wrapper.find('.sub-title').exists()).toBe(true);
  });
});
