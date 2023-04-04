import axios from "axios";

const url = "http://localhost:2000";

/**
 * @method addUser
 * @description To add user to the db while login
 */
export const addUser = async (data) => {
  try {
    let response = await axios.post(`${url}/add`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling addUser API ", error);
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
    await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.log(`Error while calling setConversation API`, error);
  }
};

/**
 * @method getConversation
 * @description To Get the conversation id from the db using the senderId and receiverId
 */
export const getConversation = async (users) => {
  try {
    let response = await axios.post(`${url}/conversation/get`, users);
    // console.log(users, 'u');
    // console.log(response)
    return response.data;
  } catch (error) {
    console.log("Error while calling getConversation API ", error);
  }
};

/**
 * @method newMessage
 * @description To store msg from input field into db when enter is clicked
 */
export const newMessage = async (message) => {
  try {
    await axios.post(`${url}/message/add`, message);
    console.log(message);
  } catch (error) {
    console.log("Error while calling newMessage API", error);
  }
};

/**
 * @method getMessage
 * @description To fetch the msgs from the db
 */
export const getMessage = async (id) => {
  try {
    let res = await axios.get(`${url}/message/get/${id}`);
    return res.data;
  } catch (error) {
    console.log("Error while calling getMessage API", error);
  }
};
