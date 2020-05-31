import defaultHttp from "axios";
// import { BASE_URL } from "./const";
import history from "../assets/history";
import reducers from "../reducers";

const http = defaultHttp.create();

http.defaults.timeout = 15000;
http.defaults.baseURL = process.env.REACT_APP_BASE_URL;

http.interceptors.request.use(
  (config) => {
    config.headers["authorization"] = reducers.getState().defaultReducer.token;
    return config;
  },
  (err) => Promise.reject(err)
);

http.interceptors.response.use(
  (res) => res,
  (err) => {
    // 这里可以判断下返回的http状态码
    // 做对应操作, 比如401, 403, 500这些, 做对应的操作或者全局提示(error.response && error.response.status)
    let status = (err.response && err.response.status) || "";
    switch (status) {
      case 401:
        history.push("login");
        return Promise.reject(err);
      default:
        return Promise.reject(err);
    }
  }
);

export { http, defaultHttp };
