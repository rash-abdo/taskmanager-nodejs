const User = require('../models/user');

// Create user
exports.createUser = async (username, hashedPassword, admin=false, blocked=false) => {
  try {
    const user = await User.create({
      name:username,
      password:hashedPassword,
      admin:admin,
      blocked:blocked})
  } catch (err) {
    throw err;
  }
};

//find user by ID
exports.findById = async(userId) => {
  try{
    return await User.findById(userId)
  } catch (err) {
    throw err
  }
}

// Find user by username
exports.findByUsername = async (username) => {
  try {
    const user = await User.findOne({ name:username});
    return user;
  } catch (err) {
    throw err;
  }
};

// Delete user by ID
exports.delete_account = async (userId) => {
  try {
    await User.deleteOne({ _id: userId });
  } catch (err) {
    throw err;
  }
};
