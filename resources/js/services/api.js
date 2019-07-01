import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
    baseURL: "/api"
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    }
    return config;
});

export default api;