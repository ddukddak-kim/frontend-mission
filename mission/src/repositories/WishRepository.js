import Client from './Clients/AxiosClient';

const resource = '/wish';

export default {
  getItemList() {
    return Client.get(`${resource}`);
  },
};
