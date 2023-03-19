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
    city: req.body.city,
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

// Retrieve all Tutorials from the database.
// exports.findAll = (req, res) => {
//   const title = req.query.title
//   var condition = title ? { title: { [Op.like]: `%${title}%` } } : null

//   Tutorial.findAll({ where: condition })
//     .then((data) => {
//       res.send(data)
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || 'Some error occurred while retrieving tutorials.',
//       })
//     })
// }

// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id

//   Tutorial.findByPk(id)
//     .then((data) => {
//       if (data) {
//         res.send(data)
//       } else {
//         res.status(404).send({
//           message: `Cannot find Tutorial with id=${id}.`,
//         })
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: 'Error retrieving Tutorial with id=' + id,
//       })
//     })
// }

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
//   const id = req.params.id

//   Tutorial.update(req.body, {
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: 'Tutorial was updated successfully.',
//         })
//       } else {
//         res.send({
//           message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
//         })
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: 'Error updating Tutorial with id=' + id,
//       })
//     })
// }

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id

//   Tutorial.destroy({
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: 'Tutorial was deleted successfully!',
//         })
//       } else {
//         res.send({
//           message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
//         })
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: 'Could not delete Tutorial with id=' + id,
//       })
//     })
// }

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//   Tutorial.destroy({
//     where: {},
//     truncate: false,
//   })
//     .then((nums) => {
//       res.send({ message: `${nums} Tutorials were deleted successfully!` })
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || 'Some error occurred while removing all tutorials.',
//       })
//     })
// }

// // find all published Tutorial
// exports.findAllPublished = (req, res) => {
//   Tutorial.findAll({ where: { published: true } })
//     .then((data) => {
//       res.send(data)
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || 'Some error occurred while retrieving tutorials.',
//       })
//     })
// }
