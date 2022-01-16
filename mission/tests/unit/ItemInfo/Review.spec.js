import { shallowMount } from '@vue/test-utils';
import Detail from '@/components/Detail.vue';

describe('ItemInfoPage', () => {
  const wrapper = shallowMount(Detail);

  it('renders review page', async () => {
    expect(wrapper.find('.content').exists()).toBe(true);
  });
});
