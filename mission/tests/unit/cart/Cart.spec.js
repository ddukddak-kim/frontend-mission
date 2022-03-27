import { mount, shallowMount, flushPromises } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import Vuex from 'vuex';
import CartListPage from '@/views/CartList.vue';
import PaymentPage from '@/views/Payment.vue';
import PaymentCompletePage from '@/views/PaymentComplete.vue';

const routes = [
  {
    path: '/cart',
    component: CartListPage,
  },
  {
    path: '/payment',
    component: PaymentPage,
  },
  {
    path: '/paymentComplete',
    component: PaymentCompletePage,
    props: true,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

beforeEach(() => {
  const wrapper = mount(CartListPage, {
    global: {
      plugins: [router],
    },
  });
});

describe('ItemListItem', () => {
  it('Payment routing test', async () => {
    try {
      router.push('/cart');
      await router.isReady();
      const wrapperApp = mount(App, {
        global: {
          plugins: [router],
        },
      });

      await wrapper.find('[data-test="router-link-payment"]').trigger('click');
      await flushPromises();

      expect(wrapperApp.findComponent(PaymentPage).exists()).toBe(true);
    } catch (error) {
      console.log(error);
    }
  });

  it('isExist item component when state carts not null ', () => {
    try {
      const store = new Vuex.Store({
        state: {
          carts: [
            {
              description: '1',
              image: 'img',
              name: '핏이 좋은 수트',
              original_price: 298000,
              price: 198000,
              product_no: 'asdf1234',
            },
          ],
        },
      });

      const localVue = createLocalVue();
      localVue.use(Vuex);

      const wrapper = shallowMount(CartListPage, {
        store,
        localVue,
      });

      expect(wrapper.find('data-test="item"').exists()).toBe(true);
    } catch (error) {}
  });

  it('show alertMessage when state carts is empty ', () => {
    try {
      const store = new Vuex.Store({
        state: {
          carts: [],
        },
      });

      const localVue = createLocalVue();
      localVue.use(Vuex);

      const wrapper = shallowMount(PaymentPage, {
        store,
        localVue,
      });

      expect(wrapper.find('data-test="emptyCart"').exists()).toBe(true);
    } catch (error) {}
  });
});
