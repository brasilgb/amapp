import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const apiautomagico = axios.create({
    // baseURL: "http://localhost:8000/api/",
    baseURL: "https://automagico.megb.com.br/api/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  export default apiautomagico;
