import Client from './Clients/AxiosClient';

const resource = '/cart';

export default {
  getItemList() {
    return Client.get(`${resource}`);
  },
};
