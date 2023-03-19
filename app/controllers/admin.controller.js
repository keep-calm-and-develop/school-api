const db = require('../models')
const crypto = require('crypto')
//const { QueryTypes } = require("sequelize/types");
const Admins = db.admins

//find by id
module.exports.findOne = (req, res) => {
  console.log('find by id', req.session.userId)
  const id = req.params.username
  Admins.findByPk(id)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error while fetching data',
      })
    })
}

module.exports.create = async (req, res) => {
  // Validate request
  if (!req.body.admin_firstname) {
    res.status(400).send({
      message: 'first name can not be empty!',
    })
    return
  }

  if (!req.body.admin_lastname) {
    res.status(400).send({
      message: 'last name can not be empty!',
    })
    return
  }

  const password = crypto
    .createHash('md5')
    .update(req.body.passwd)
    .digest('hex')

  const admin = {
    admin_firstname: req.body.admin_firstname,
    admin_lastname: req.body.admin_lastname,
    admin_email: req.body.admin_email,
    username: req.body.username,
    passwd: password,
  }
  Admins.create(admin)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the admin',
      })
    })
}

module.exports.update = (req, res) => {
  // Validate request
  const admin_id = req.body.admin_id
  if (!req.body.admin_id) {
    res.status(400).send({
      message: 'admin id can not be empty!',
    })
    return
  }

  Admins.update(req.body, {
    where: { admin_id: admin_id },
  })
    .then((num) => {
      res.send({
        message: 'Admins was updated successfully.',
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating admins with id=' + admin_id,
      })
    })
}
