import { shallowMount } from '@vue/test-utils';
import Title from '@/components/ItemInfo/Title.vue';

describe('ItemInfoPage', () => {
  const wrapper = shallowMount(Title);

  it('renders title Image', async () => {
    expect(wrapper.find('.title-image').exists()).toBe(true);
  });

  it('renders store info', async () => {
    expect(wrapper.find('.store').exists()).toBe(true);
  });

  it('renders price info', async () => {
    expect(wrapper.find('.price').exists()).toBe(true);
  });
});
