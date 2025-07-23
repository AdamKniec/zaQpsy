import axios from "axios";

const apiUrl = "";
const apiToken = "";

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    apikey: `${apiToken}`,
    Authorization: `Bearer ${apiToken}`,
    "Content-Type": "application/json",
  },
});

export default api;
