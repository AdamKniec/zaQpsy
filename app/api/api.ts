import axios from "axios";

const API_TOKEN = process.env.EXPO_PUBLIC_API_TOKEN;
const API_URL = process.env.EXPO_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    apikey: `${API_TOKEN}`,
    Authorization: `Bearer ${API_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export default api;
