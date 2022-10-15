import axios from 'axios';
import { SERVER_URL } from './constant';

async function Post(value, baseUrl) {
    try {
        const res = await axios.post(SERVER_URL + baseUrl, value);
        return res
    } catch (error) {
        return error?.response;
    }
}

async function Get(baseUrl) {
    try {
        const res = await axios.get(SERVER_URL + baseUrl);
        return res
    } catch (error) {
        return error?.response;
    }
}

async function Put(value,baseUrl) {
    try {
        const res = await axios.put(SERVER_URL + baseUrl, value);
        return res
    } catch (error) {
        return error?.response;
    }
}

async function Delete(baseUrl) {
    try {
        const res = await axios.delete(SERVER_URL + baseUrl);
        return res
    } catch (error) {
        return error?.response;
    }
}

export { Post, Get, Put, Delete }