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
    console.log(body)
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
 
    try {
        const response = await axios.get(url)
        return response.data;
        
    } catch (error) {
        console.error('Error:', error.response || error.message);
        throw error;
    }
}

export const getHotelList = async (name) =>{

    const url = `${API_BASE_URL}${API_URLs.GET_HOTELS}/${name}`

    try {
        const response = await axios.get(url)
        return response.data;
        
    } catch (error) {
        console.error('Error:', error.response || error.message);
        throw error;
    }
}

export const getPlaceList = async (name) =>{

    const url = `${API_BASE_URL}${API_URLs.GET_PLACES}/${name}`
    console.log(url);
    try {
        const response = await axios.get(url)
        return response.data;
        
    } catch (error) {
        console.error('Error:', error.response || error.message);
        throw error;
    }
}

export const SearchHotels = async (body) =>{

    const url = `${API_BASE_URL}${API_URLs.SEARCH_HOTEL}`
 
    try {
        const response = await axios.post(url,body)
        return response.data;
        
    } catch (error) {
        console.error('Error:', error.response || error.message);
        throw error;
    }
}