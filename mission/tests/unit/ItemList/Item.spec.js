import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/components/ItemList/Item.vue';

describe('ItemListItem', () => {
  it('redners product items', () => {
    const wrapper = mount(ItemInfoPage, {
      props: {
        product: {
          id: '1',
          name: 'testData',
          price: '10000',
          discountPrice: '5000',
          description: 'test data',
          /* eslint-disable global-require */
          img: require('@/assets/img/title/store_01.jpg'),
        },
      },
    });

    expect(wrapper.find('[data-test="discount-percent"]').exists()).toBe(true);
  });

  it('test purchase info when discount', () => {
    const wrapper = mount(ItemInfoPage, {
      props: {
        product: {
          id: '1',
          name: 'testData',
          price: '10000',
          discountPrice: '5000',
          description: 'test data',
          /* eslint-disable global-require */
          img: require('@/assets/img/title/store_01.jpg'),
        },
      },
    });

    // check calculated discount-percent is correct
    expect(wrapper.find('[data-test="discount-percent"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="discount-percent"]').text()).toBe('50%');

    // check purchase price is correct
    expect(wrapper.find('[data-test="purchase-price"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="purchase-price"]').text()).toBe('5,000 원');
  });

  it('test when no discount', () => {
    const wrapper = mount(ItemInfoPage, {
      props: {
        product: {
          id: '2',
          name: 'test2',
          price: '20000',
          discountPrice: '',
          description: 'test data',
          /* eslint-disable global-require */
          img: require('@/assets/img/title/store_01.jpg'),
        },
      },
    });

    // check no discount template
    expect(wrapper.find('[data-test="discount-percent"]').exists()).toBe(false);

    // check purchase price is correct
    expect(wrapper.find('[data-test="purchase-price"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="purchase-price"]').text()).toBe('20,000 원');
  });
});
