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

export const getCityDetails = async (name) =>{

    const url = `${API_BASE_URL}${API_URLs.GET_CITY}/${name}`
 
    try {
        const response = await axios.get(url)
        return response.data;
        
    } catch (error) {
        console.error('Error:', error.response || error.message);
        throw error;
    }
}

export const getWeather = async (city) =>{
    console.log(city)
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
 
    try {
        const response = await axios.get(url)
        return response.data;
        
    } catch (error) {
        console.error('Error:', error.response || error.message);
        throw error;
    }

}
export const getUserList = async () =>{

  const url = `${API_BASE_URL}${API_URLs.GET_USERS}`
 
    try {
        const response = await axios.get(url)
        return response.data;
        
    } catch (error) {
        console.error('Error:', error.response || error.message);
        throw error;
    }

}

export const getUserDetails = async (userId) =>{

  const url = `${API_BASE_URL}${API_URLs.GET_USER_DETAILS}/${userId}`
    try {
        const response = await axios.get(url)
        return response.data;
        
    } catch (error) {
        console.error('Error:', error.response || error.message);
        throw error;
    }

}

export const getHotelDetails = async (id) =>{

  const url = `${API_BASE_URL}${API_URLs.GET_HOTEL_BYID}/${id}`
 
    try {
        const response = await axios.get(url)
        return response.data;
        
    } catch (error) {
        console.error('Error:', error.response || error.message);
        throw error;
    }

}

export const getPackageList = async () =>{

  const url = `${API_BASE_URL}${API_URLs.GET_ALL_PACKAGES}`
 
    try {
        const response = await axios.get(url)
        return response.data;
        
    } catch (error) {
        console.error('Error:', error.response || error.message);
        throw error;
    }

}

export const getBookingList = async () =>{

  const url = `${API_BASE_URL}${API_URLs.GET_ALL_BOOKINGS}`
 
    try {
        const response = await axios.get(url)
        return response.data;
        
    } catch (error) {
        console.error('Error:', error.response || error.message);
        throw error;
    }

}
export const getPackageById = async (id) =>{

  const url = `${API_BASE_URL}${API_URLs.GET_PACKAGE_BYID}/${id}`
 
    try {
        const response = await axios.get(url)
        return response.data;
        
    } catch (error) {
        console.error('Error:', error.response || error.message);
        throw error;
    }

}


