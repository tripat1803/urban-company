import { store } from "@/store/store";
import axios from "axios";
import _ from "lodash";

const baseURL = "https://proxy-server-red-seven.vercel.app";
export const public_api = axios.create({
    baseURL: `${baseURL}`
})

export const private_api = axios.create({
    baseURL: `${baseURL}`
});

private_api.interceptors.request.use((config) => {
    const state = store.getState();
    console.log(state);
    config.headers["authorization"] = `Bearer ${_.get(state, "login.token")}`;
    return config;
})