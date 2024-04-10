module.exports = (app) => {
    const school = require('../controllers/school.controller.js')
    const students = require('../controllers/student.controller.js')
    const router = require('express').Router()

    router.get('/school/reports', students.fetchReports)

    router.get('/all-photos', students.findZipData)

    router.get('/data-download', students.findAll)

    router.delete('/data-delete', students.deleteAllWhere)

    router.delete('/photos-delete', students.deleteAllFilesInDirectory)

    router.post('/school', school.create)

    router.post('/student', students.create)

    router.get('/school-data', school.findAll)

    router.get('/:id', school.findOne)

    app.use('/api', router)

    app.use('/public', router)
}
