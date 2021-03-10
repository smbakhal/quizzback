const User = require('../models/user');

module.exports.getUsers = async (req, res) => {
  const allUsers = await User.find({});
  res.status(200).json({ message: allUsers });
};

module.exports.createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Enter both values' });
    }
    const newUser = new User({
      email,
      password,
    });
    savedUser = await newUser.save();
    return res.status(201).json({ message: savedUser });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};
