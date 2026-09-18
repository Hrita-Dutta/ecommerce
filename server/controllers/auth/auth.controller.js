const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

// login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // check user registered or not
    const userExist = await User.findOne({ email });
    if (!userExist)
      return res.status(404).json({
        success: false,
        message: "User doesn't exist! Please register first",
      });

    // check match password
    const checkPasswordMatch = await bcrypt.compare(
      password,
      userExist.password,
    );

    // password invalid message
    if (!checkPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect Password! Please try again",
      });
    }

    // token
    const token = jwt.sign(
      {
        id: userExist._id,
        email: userExist.email,
        role: userExist.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      message: "Logged in successfully",
      user: {
        email: userExist.email,
        role: userExist.role,
        id: userExist._id,
      },
    });
  } catch (err) {
    console.log("Error: ", err);
    return res.status(404).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

module.exports = { registerUser, loginUser };
