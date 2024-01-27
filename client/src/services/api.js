import axios from 'axios';

const API_URL = "http://localhost:8080";

// we will get the payload from the from on submit. 
export const savePost = async (payload) => {
    try{
        return await axios.post(`${API_URL}/post`, payload);
    }
    catch(error) {
        console.log("Error : ",error.message);
        return error.response.data;
    }
}