const express = require('express')
const cors = require('cors')
const functions = require('firebase-functions/v2');

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

const db = require('./app/models')

db.sequelize
  .sync()
  .then(() => {
    console.log('Synced db.')
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message)
  })

require('./app/routes/turorial.routes')(app)
require('./app/routes/login.route')(app)
require('./app/routes/admin.route')(app)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

exports.api = functions.https.onRequest(app);
