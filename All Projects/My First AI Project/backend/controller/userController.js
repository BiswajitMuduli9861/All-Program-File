const userModel = require('../models/model')
const signUp = async (req, res) => {
    try {
        const { fullName, email, password, confirmPassword } = req.body;

        if (!fullName || !email || !password || !confirmPassword) {
            return res.status(400).json({ status: 400, message: "Bad Request", error: "All fields are required" });
        }
        const userExists = await userModel.findOne({ email });
        if (userExists) {
            return res.status(409).json({ status: 409, message: "Conflict", error: "User already exists" });
        }
        const newUser = new userModel({ fullName, email, password, confirmPassword });
        await newUser.save(); 
       
        res.status(201).json({ status: 201, message: "User created successfully", data: { fullName, email } });

    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal Server Error", error: err.message });
    }
}

module.exports = { signUp };