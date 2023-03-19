const db = require('../models')
const School = db.school
const Op = db.Sequelize.Op

exports.create = async (req, res) => {
  console.log('inside create student')
  const school = {
    name: req.body.name,
  }
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  const nameExists = await School.findOne({ where: { name: req.body.name } })

  if (nameExists) {
    console.log('Value already exists', req.body.name)
    res
      .status(409)
      .json({ success: false, error: 'School Name already exists!' })
    return
  }

  School.create(school)
    .then((data) => {
      res.status(201).json({ success: true, school: data })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the School.',
      })
    })
}

exports.findAll = (req, res) => {
  console.log('inside create school')
  const name = req.query.name
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null

  School.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving School.',
      })
    })
}

exports.findOne = (req, res) => {
  console.log('inside find school')
  const id = req.params.id

  School.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data.name)
      } else {
        res.status(404).send({
          message: `Cannot find School with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving School with id=' + id,
      })
    })
}
