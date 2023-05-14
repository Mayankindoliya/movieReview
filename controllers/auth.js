const jwt = require('../helpers/jwt');
const Users = require('../models/users');

const bcryptjs = require('bcryptjs');

class authControllers {

  static async registerUsers(document) {
    const salt = bcryptjs.genSaltSync(10)
    const hash = bcryptjs.hashSync(document.password, salt) 
    document.password = hash 
    const user = await Users.create(document)
    return user
  };

  static async loginUsers(document) {
    const user = await Users.findOne({ username: document.username })
    
    if (!user) {
      throw new Error("user not found")
    }
    // check for password
    if (!bcryptjs.compareSync(document.password, user.password)) {
      throw new Error("Password not matched")
    }
    const token = jwt.createJwt({id: user._id}) 
    return {token};  
  };

};

module.exports = authControllers;