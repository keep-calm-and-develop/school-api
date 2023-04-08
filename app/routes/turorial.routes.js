module.exports = (app) => {
  const school = require('../controllers/school.controller.js')
  const students = require('../controllers/student.controller.js')
  const path = require('path')
  const fs = require('fs')
  const multer = require('multer')
  var router = require('express').Router()

  var storage = multer.diskStorage({
    destination: (req, photo, callBack) => {
      const { school_name } = req.body
      const path = `./public/uploads/${school_name}`
      fs.mkdirSync(path, { recursive: true })
      callBack(null, path) // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
      callBack(null, file.originalname.replace(/ /g, '_'))
    },
  })

  const upload = multer({ storage: storage })

  router.get('/all-photos', students.findZipData)

  router.get('/data-download', students.findAll)

  router.post('/school', school.create)

  router.post('/student', upload.single('photo'), students.create)

  router.get('/school-data', school.findAll)

  router.get('/:id', school.findOne)

  app.use('/api', router)
}
