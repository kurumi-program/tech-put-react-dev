import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

const options = {
  ignoreHeaders: true,
};

export const client = applyCaseMiddleware(
  axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_DEV,
    withCredentials: true,
  }),
  options,
);
