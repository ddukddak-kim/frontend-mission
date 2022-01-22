import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemList.vue';

describe('ItemListPage', () => {
  it('redners ItemListPage', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('#item-list-page').exists()).toBe(true);
  });

  it('redners header items', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('[data-test="store-name"]').exists()).toBe(true);
  });

  it('redners navigation items', () => {
    const wrapper = mount(ItemInfoPage);

    // isExist Navigation
    expect(wrapper.find('[data-test="navigation"]').exists()).toBe(true);

    // has 4 Navigation-Items
    expect(wrapper.find('[data-test="navigation-item"]').length).toBe(4);
  });
});
