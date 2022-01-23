import { mount } from '@vue/test-utils';
import ItemListPage from '@/views/ItemList.vue';

describe('ItemListPage', () => {
  it('redners ItemListPage', () => {
    const wrapper = mount(ItemListPage);

    expect(wrapper.find('#item-list-page').exists()).toBe(true);
  });

  it('redners header items', () => {
    const wrapper = mount(ItemListPage);

    expect(wrapper.find('[data-test="store-name"]').exists()).toBe(true);
  });

  it('redners navigation items', () => {
    const wrapper = mount(ItemListPage);

    // isExist Navigation
    expect(wrapper.find('[data-test="navigation"]').exists()).toBe(true);

    // has 4 Navigation-Items
    // expect(wrapper.find('[data-test="navigation-item"]').length).toBe(4);
  });

  it('redners product-list items', () => {
    const wrapper = mount(ItemListPage, {
      data() {
        return {
          product: [
            {
              id: '1',
              name: 'testData',
              price: '10',
              discountPrice: '',
              description: 'test data',
              /* eslint-disable global-require */
              img: require('@/assets/img/title/store_01.jpg'),
            },
          ],
        };
      },
    });

    // if productData Length is even -> check empty-item added
    expect(wrapper.find('[data-test="empty-item"]').exists()).toBe(true);

    // if productData exist -> check item added
    expect(wrapper.find('.item-list-item').exists()).toBe(true);
  });
});
