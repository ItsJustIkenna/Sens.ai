import axios from "axios";

const baseUrl = process.env.BASE_URL;
const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
