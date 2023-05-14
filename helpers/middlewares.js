const Users = require('../models/users')

async function authenticationMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    // verify the token
    const token = authHeader.split(' ')[1];
    const payload = jwt.verifyJwt(token);
    const user = await Users.findOne({ _id: payload.id }, 'name email address').lean()
    user.id = user._id
    console.log(user)
    req.user = user;
  }
  next()
}

module.exports = {
  authenticationMiddleware 
};