const Users = require('../models/users');

class UsersController {
  static async getUsers() {
    const users = await Users.find({})
    return users
  };

  static async createUsers (document) {
    document.created_at = new Date();
    const users =  await Users.create(document)
    return users
  };

  static async updateUsers (id, document) {
    document.updated_at = new Date();
    const users = await Users.findOneAndUpdate({_id: id}, document, {new: true})
    return users
  };

 static async deleteUsers(id) {
 const users = await Users.findOneAndDelete({_id: id})
 return users
 }

};


module.exports = UsersController; 