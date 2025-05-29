import axios from 'axios';  
import { API_BASE_URL, API_URLs } from './constant';

export const loginUser = async (body) =>{

    const url = `${API_BASE_URL}${API_URLs.LOGIN}`

    try {
        const response = await axios.post(url, body)

        return response.data;
        
    } catch (error) {
        console.error('Error:', error.response || error.message);
        throw error;
    }
}

export const registerUser = async (body) =>{

    const url = `${API_BASE_URL}${API_URLs.SIGNUP}`

    try {
        const response = await axios.post(url, body)
        return response.data;
        
    } catch (error) {
        console.error('Error:', error.response || error.message);
        throw error;
    }
}

export const getAllStates = async () =>{

    const url = `${API_BASE_URL}${API_URLs.GET_STATES}`

    try {
        const response = await axios.get(url)
        return response.data;
        
    } catch (error) {
        console.error('Error:', error.response || error.message);
        throw error;
    }
}

export const getStateByName = async (name) =>{

    const url = `${API_BASE_URL}${API_URLs.GET_STATES}/${name}`
    console.log(url)
    try {
        const response = await axios.get(url)
        return response.data;
        
    } catch (error) {
        console.error('Error:', error.response || error.message);
        throw error;
    }
}

export const getCitiesByStateName = async (name) =>{

    const url = `${API_BASE_URL}${API_URLs.GET_CITIES}/${name}`
    console.log(url)
    try {
        const response = await axios.get(url)
        return response.data;
        
    } catch (error) {
        console.error('Error:', error.response || error.message);
        throw error;
    }
}