const jwt = require('jsonwebtoken');

function createJwt(payload) {
  const jwtToken = jwt.sign(payload, "ksss", { expiresIn: '2 days' })
  return jwtToken
}

function verifyJwt(token) {
return jwt.verify(token, "ksss") 

}


module.exports = {
  createJwt,
  verifyJwt
};