import { createStore } from 'vuex';
import { getList } from '@/utils/api/index';

export default createStore({
  state: {
    user: {
      id: '',
      email: '',
      username: '',
      api_key: '',
    },
    isLoading: true,
    pageType: 'item',
    products: [],
  },
  mutations: {
    movePage(state, { pageType }) {
      let colName = 'items';
      state.isLoading = true;
      state.pageType = pageType;

      getList({ type: state.pageType })
        .then(({ data }) => {
          if ('cart'.includes(state.pageType)) colName = 'cart_item';

          const { [colName]: items } = data;

          state.products = items;
          state.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          state.isLoading = false;
        });
    },
  },
  actions: {},
  modules: {},
});
