module.exports = (app) => {
  const login = require('../controllers/login.controller.js')
  var router = require('express').Router()

  //
  router.post('/', login.authenticate)

  app.use('/api/login', router)
}
