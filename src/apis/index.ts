import axios, { AxiosError, AxiosResponse } from "axios";
import { API_BASE_URL } from "../constants/api";

export const instance = axios.create({
  baseURL: API_BASE_URL,
});

function responsefulfilledInterceptor(res: AxiosResponse) {
  if (200 <= res.status && res.status < 300) {
    return res.data;
  }
  return Promise.reject(res.data);
}

function responseRejectedInterceptor(error: AxiosError) {
  return error;
}

instance.interceptors.response.use(
  responsefulfilledInterceptor,
  responseRejectedInterceptor
);

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
}
