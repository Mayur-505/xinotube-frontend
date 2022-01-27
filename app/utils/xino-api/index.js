import api from "./axios";

export const register = (data) => api('register', 'POST', data);