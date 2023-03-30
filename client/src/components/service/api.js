import axios from 'axios';

const url = 'http://localhost:2000';

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log("Error Occured During Adding User", error.message);
    }
}