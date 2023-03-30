import axios from 'axios';

url = '';

export const addUser = async (data) => {
    try {
        await axios.post(url, data);
    } catch (error) {
        console.log("Error Occured During Adding User", error.message);
    }
}