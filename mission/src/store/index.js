import { createStore } from 'vuex';
import { getList } from '@/utils/api/index';

export default createStore({
  state: {
    isLoading: true,
    pageType: 'item',
    products: [],
  },
  mutations: {
    movePage(state, payload) {
      let colName = 'items';
      state.isLoading = true;
      state.pageType = payload.pageType;

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
  actions: {
    // getAxios() {
    //   getList({ type: 'item' })
    //     .then(({ data }) => {
    //       const { items } = data;
    //       this.products = items;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
  },
  modules: {},
});
