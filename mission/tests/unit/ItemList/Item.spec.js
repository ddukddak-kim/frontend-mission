import { mount, flushPromises } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import ItemListPage from '@/views/ItemList.vue';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemListItem', () => {
  const routes = [
    {
      path: '/',
      component: ItemListPage,
    },
    {
      path: '/item',
      component: ItemInfoPage,
      props: true,
    },
  ];

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });

  beforeEach(() => {
    wrapper = mount(ItemListPage, {
      global: {
        plugins: [router],
      },
    });
  });

  it('ItemInfo routing test', async () => {
    router.push('/');

    await router.isReady();
    const wrapperApp = mount(App, {
      global: {
        plugins: [router],
        // stubs: { FontAwesomeIcon },
      },
    });

    await wrapper.find('[data-test="router-link-itemInfo"]').trigger('click');
    await flushPromises();
    expect(wrapperApp.findComponent(ItemInfoPage).exists()).toBe(true);
  });

  it('test description reduced', () => {
    const GIVEN_DESCRIPTION = 'abcdefghijklmn';
    const EXPECTED_DESCRIPTION = 'abcdefghij...';

    const wrapper = mount(ItemInfoPage, {
      props: {
        product: {
          id: '3',
          name: 'test2',
          price: '20000',
          discountPrice: '',
          description: GIVEN_DESCRIPTION,
          /* eslint-disable global-require */
          img: require('@/assets/img/title/store_01.jpg'),
        },
      },
    });

    // check no discount template
    expect(wrapper.find('[data-test="product-description"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="product-description"]').text()).toBe(EXPECTED_DESCRIPTION);
  });

  /**
   * todo :: edit test code
      it('redners product items', () => {
        const wrapper = mount(ItemInfoPage, {
          props: {
            product: {
              id: '1',
              name: 'testData',
              price: '10000',
              discountPrice: '5000',
              description: 'test data',
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
            },
          },
        });

        // check no discount template
        expect(wrapper.find('[data-test="discount-percent"]').exists()).toBe(false);

        // check purchase price is correct
        expect(wrapper.find('[data-test="purchase-price"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="purchase-price"]').text()).toBe('20,000 원');
      });
   */
});
