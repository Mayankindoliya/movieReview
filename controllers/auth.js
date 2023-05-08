const Users = require('../models/users');

class authControllers {

  static async registerUsers(document) {
    const user = await Users.create(document)
    return user
  };

  static async loginUsers(document) {
    const user = await Users.findOne({ username: document.username })
    if (!user) {
      throw new Error("user not found")
    }
    // check for password
    if (user.password !== document.password) {
      throw new Error("Password not matched")
    }
    return user;
  };

};

module.exports = authControllers;