module.exports = (app) => {
  const admin = require('../controllers/admin.controller.js')
  var router = require('express').Router()

  router.post('/create', admin.create)

  router.put('/', admin.update)

  app.use('/api/admin', router)
}
