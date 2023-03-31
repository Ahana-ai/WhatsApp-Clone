import user from "../models/user-model.js";

class UserController {
    constructor() {};

    async addUser (req, res) {
        try {
            let isUserExists = await user.findOne({ sub: req.body.sub });

            console.log(req.body);
            if(isUserExists) {
                res.status(200).json({ msg: 'User already exists!' });
                return;
            }
            const newUser = new user(req.body);
            await newUser.save();
            return res.status(200).json(newUser);
        } catch (error) {
            res.status(500).json(error.message);
        }
    };

    async getUser (req, res) {
        try {
            let Users = await user.find({});
            return res.status(200).json(Users);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

export default UserController = new UserController();