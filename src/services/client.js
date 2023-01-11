import axios from "axios";

import { parse, stringify } from "qs";

import { HOST_API } from "../config";
import { getUserFromLocal } from "../utils/sessionManager";

const api = axios.create({
  baseURL: HOST_API,
  headers: {
    Authorization: "Bearer " + getUserFromLocal(),
  },

  paramsSerializer: {
    encode: parse,
    serialize: stringify,
  },
});

export default api;
