import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemList.vue';

describe('ItemListPage', () => {
  it('redners ItemListPage', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('#item-list-page').exists()).toBe(true);
  });

  it('redners storeName', () => {
    const wrapper = mount(ItemInfoPage);
    const $storeName = '[data-test="store-name"]';

    expect(wrapper.find($storeName).exists()).toBe(true);
  });
});
