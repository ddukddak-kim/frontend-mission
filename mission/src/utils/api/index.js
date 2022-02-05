import axios from 'axios';

const BASE_URL = 'https://virtserver.swaggerhub.com/lkaybob/projectlion-vue/1.0.0';
const AUTHORIZATION = 'abcd1234';

let config = {
  method: '',
  url: '',
  headers: {
    Accept: 'application/json',
    Authorization: AUTHORIZATION,
  },
  data: '',
};

/* 목록 조회
  (type - 상품 목록 / wich - 찜 목록 / cart - 장바구니 목록)
*/
const getList = ({ type }) => {
  config = {
    ...config,
    method: 'get',
    url: `${BASE_URL}/${type}`,
  };

  return axios(config);
};

// 상품 상세 정보 조회
const getItemDetail = ({ itemNo }) => {
  config = {
    ...config,
    method: 'get',
    url: `${BASE_URL}/item/${itemNo}`,
  };

  return axios(config);
};

export { getList, getItemDetail };
