import Client from './Clients/AxiosClient';

const resource = '/item';

export default {
  getItemList() {
    return Client.get(`${resource}`);
  },
  getItemDetail(id) {
    return Client.get(`${resource}/${id}`);
  },
};
