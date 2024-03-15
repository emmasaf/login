const { default: axios } = require("axios");

const $api = axios.create({
  baseURL: 'https://auth-qa.qencode.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default $api