const jwt = require('jsonwebtoken');

function createJwt(payload) {
  const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2 days' })
  return jwtToken
}

function verifyJwt(token) {
return jwt.verify(token, process.env.JWT_SECRE) 

}


module.exports = {
  createJwt,
  verifyJwt
};