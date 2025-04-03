import { boot } from 'quasar';
import axios from 'axios';

const api = axios.create({ baseURL: 'https://api.example.com' });

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
