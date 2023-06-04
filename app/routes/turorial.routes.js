module.exports = (app) => {
  const school = require('../controllers/school.controller.js')
  const students = require('../controllers/student.controller.js')
  const path = require('path')
  const fs = require('fs')
  const multer = require('multer')
  const express = require('express')
  var router = require('express').Router()

  var storage = multer.diskStorage({
    destination: (req, photo, callBack) => {
      const { school_id } = req.body
      const path = `./public/uploads/${school_id}`
      fs.mkdirSync(path, { recursive: true })
      callBack(null, path) // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
      callBack(null, file.originalname)
    },
  })
  const baseImagePath = path.normalize(path.join('public', 'uploads'))

  const getImagePath = students.getImage(baseImagePath)
  const upload = multer({ storage: storage })

  router.get('/school/reports', students.fetchReports)

  router.get('/uploads/:schoolId/:imageName', getImagePath)

  router.get('/all-photos', students.findZipData)

  router.get('/data-download', students.findAll)

  router.delete('/data-delete', students.deleteAllWhere)

  router.delete('/photos-delete', students.deleteAllFilesInDirectory)

  router.post('/school', school.create)

  router.post('/student', upload.single('photo'), students.create)

  router.get('/school-data', school.findAll)

  router.get('/:id', school.findOne)

  app.use('/api', router)

  app.use('/public', router)
}
