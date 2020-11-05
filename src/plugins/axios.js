"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = 'https://programacao-ecotec.firebaseio.com/';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// let config = {
//   baseURL: process.env.baseURL || process.env.apiUrl || ""
//   timeout: 60 * 1000, // Timeout
//   withCredentials: true, // Check cross-site Access-Control
// };

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: 'https://programacao-ecotec.firebaseio.com/',
    });
  }
});