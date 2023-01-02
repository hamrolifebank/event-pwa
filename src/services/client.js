import axios from "axios";

import { parse, stringify } from "qs";

import { HOST_API } from "../config";

const api = axios.create({
  baseURL: HOST_API,
  paramsSerializer: {
    encode: parse,
    serialize: stringify,
  },
});

export default api;
