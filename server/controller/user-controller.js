import user from "../models/user-model.js";

class UserController {
    constructor() {};

    async addUser (req, res) {
        try {
            console.log(req.body);
        } catch (error) {
            console.log('Error adding user', error);
        }
    }
}

export default UserController = new UserController();