import { boot } from "quasar/wrappers";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
