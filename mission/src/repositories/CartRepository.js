import Client from './Clients/AxiosClient';

const resource = '/cart';

export default {
  getCartList() {
    return Client.get(`${resource}`);
  },
};
