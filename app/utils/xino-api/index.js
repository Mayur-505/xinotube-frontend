import api from "./axios";

export const register = (data) => api('register', 'POST', data);

export const login = (data) => api('login', 'POST', data);

export const reset_password = (data) => api('reset_password', 'POST', data);

