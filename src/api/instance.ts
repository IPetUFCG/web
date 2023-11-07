import axios from "axios";

export const baseURL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://34.42.217.37:3000";

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
