import { shallowMount } from '@vue/test-utils';
import Purchase from '@/components/ItemInfo/Purchase.vue';

describe('ItemInfoPage', () => {
  const wrapper = shallowMount(Purchase);

  it('renders purchase button', async () => {
    expect(wrapper.find('.purchase').exists()).toBe(true);
  });
});
