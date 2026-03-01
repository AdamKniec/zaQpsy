// import axios from "axios";
import { createClient } from '@supabase/supabase-js'

const API_TOKEN = process.env.EXPO_PUBLIC_API_TOKEN;
const API_URL = process.env.EXPO_PUBLIC_API_URL;

// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     apikey: `${API_TOKEN}`,
//     Authorization: `Bearer ${API_TOKEN}`,
//     "Content-Type": "application/json",
//   },
// });

// export default api;

const  supabase = createClient(`${API_URL}`, `${API_TOKEN}`)

export default supabase