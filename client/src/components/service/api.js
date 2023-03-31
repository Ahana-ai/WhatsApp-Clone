import axios from 'axios';

const url = 'http://localhost:2000';

/**
 * @method addUser
 * @description To add user to the db while login
 */
export const addUser = async (data) => {
    try {
        let response = await axios.post(`${url}/add`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ', error);
    }
};

/**
 * @method getUser
 * @description To get the user details 
 */
export const getUser = async () => {
    try {
        let res = await axios.get(`${url}/users`);
        return res.data;
    } catch (error) {
        console.log(`Error while calling getUsers API`, error.message);
    }
};

/**
 * @method setConversation
 * @description To open up the chat on the right hand side after it is clicked upon on the left
 */
export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data)
    } catch (error) {
        console.log(`Error while calling setConversation API`, error);
    }
}