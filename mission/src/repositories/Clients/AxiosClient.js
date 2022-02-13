import axios from 'axios';

const BASE_URL = 'https://virtserver.swaggerhub.com/lkaybob/projectlion-vue/1.0.0';
const AUTHORIZATION = 'abcd1234';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: AUTHORIZATION,
  },
});
