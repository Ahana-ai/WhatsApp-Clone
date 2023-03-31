import axios from 'axios';

const url = 'http://localhost:2000';

export const addUser = async (data) => {
    try {
        let response = await axios.post(`${url}/add`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ', error);
    }
};

export const getUser = async () => {
    try {
        let res = await axios.get(`${url}/users`);
        return res.data;
    } catch (error) {
        console.log(`Error while calling getUsers API`, error.message);
    }
};

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data)
    } catch (error) {
        console.log(`Error while calling setConversation API`, error);
    }
}