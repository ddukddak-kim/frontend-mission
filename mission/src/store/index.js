import { createStore } from 'vuex';
import { getList } from '@/utils/api/index';

export default createStore({
  state: {
    pageType: 'item',
    products: [],
  },
  mutations: {
    movePage(state, payload) {
      let colName = 'items';
      state.pageType = payload.pageType;

      getList({ type: state.pageType })
        .then(({ data }) => {
          if ('cart'.includes(state.pageType)) colName = 'cart_item';

          const { [colName]: items } = data;

          state.products = items;
        })
        .catch((error) => {
          console.log(error);
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
