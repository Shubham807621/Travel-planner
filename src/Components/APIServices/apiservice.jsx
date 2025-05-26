import axios from 'axios';  
import { API_BASE_URL, API_URLs } from './constant';

export const loginUser = async (body) =>{

    const url = `${API_BASE_URL}${API_URLs.LOGIN}`

    try {
        const response = await axios.post(url, body)
        console.log(response);
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
        console.log(response);
        return response.data;
        
    } catch (error) {
        console.error('Error:', error.response || error.message);
        throw error;
    }
}