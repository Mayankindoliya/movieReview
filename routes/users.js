const express = require('express');

const router = express.Router();

const UsersController = require('../controllers/users');

router.get('/users', (req, res, next) => {
  UsersController.getUsers()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
});

router.post('/users', (req, res, next) => {
  UsersController.createUsers(req.body)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
});

router.put('/users/:id', (req, res, next) => {
  UsersController.updateUsers(req.params.id, req.body)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
});

router.delete('/users/:id', (req, res, next) => {
  UsersController.deleteUsers(req.params.id)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next (err)
  })
});

module.exports = router;