
require('dotenv').config()
// firebase app
require('./app/firebase.js')
// express app
const express = require('express')
const cors = require('cors')
const app = express()
// parser
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// database setup
const db = require('./app/models')
db.sequelize
    .sync()
    .then(() => {
        console.log('Synced db.')
    })
    .catch((err) => {
        console.log('Failed to sync db: ' + err.message)
    })

// API routes
require('./app/routes/turorial.routes')(app)
require('./app/routes/login.route')(app)
require('./app/routes/admin.route')(app)

// express server
// const PORT = process.env.SERVER_PORT || 5000
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}.`)
// })

// firebase functions
const { onRequest } = require('firebase-functions/v2/https');
exports.server = onRequest(app);
