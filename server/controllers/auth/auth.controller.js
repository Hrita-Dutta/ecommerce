const User = require("../../models/User");
const bcrypt = require("bcryptjs");

// register
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    // check email already exist or not
    const isEmail = await User.findOne({ email });

    if (isEmail) {
      return res.status(409).json({
        success: false,
        message: "Email alreay exists! Please, Try with another email",
      });
    }
    // bcrypt the password
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      userName,
      email,
      password: hashPassword,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (err) {
    console.log("Error: ", err);
    return res.status(404).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

module.exports = { registerUser };
