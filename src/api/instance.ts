import axios from "axios";

axios.create({
  baseURL: process.env.BASE_URL,
});

export default axios;
