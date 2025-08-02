const { User } = require('../models');

// Create user
exports.createUser = async (username, hashedPassword, admin = false) => {
  try {
    const user = await User.create({ username, password: hashedPassword, admin });
    return user.id;
  } catch (err) {
    throw err;
  }
};

// Find user by username
exports.findByUsername = async (username) => {
  try {
    const user = await User.findOne({ where: { username } });
    return user;
  } catch (err) {
    throw err;
  }
};

// Delete user by ID
exports.delete_account = async (userId) => {
  try {
    await User.destroy({ where: { id: userId } });
  } catch (err) {
    throw err;
  }
};
