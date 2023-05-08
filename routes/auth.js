const express = require("express");

const router = express.Router();

const authControllers = require("../controllers/auth");

router.post("/register", (req, res, next) => {
  authControllers.registerUsers(req.body)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
});

router.post('/login', (req, res, next) => {
  authControllers.loginUsers(req.body)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next(err)
  })
});



module.exports = router;   