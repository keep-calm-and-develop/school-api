const db = require('../models')
const Student = db.students
const Op = db.Sequelize.Op

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request

  const student = {
    full_name: req.body.full_name,
    school_name: req.body.school_name,
    mobile_1: req.body.mobile_1,
    mobile_2: req.body.mobile_2,
    address: req.body.address,
    grno: req.body.grno,
    standard: req.body.standard,
    division: req.body.division,
    school_id: req.body.school_id,
    blood_group: req.body.blood_group,
    date_of_birth: req.body.date_of_birth,
    photo: req.body.photo,
    photo_name: req.body.photo_name,
  }
  if (!req.body.full_name) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }
  // Save Tutorial in the database
  Student.create(student)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Tutorial.',
      })
    })
}


