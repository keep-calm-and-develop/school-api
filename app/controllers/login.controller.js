//authenticate
module.exports.authenticate = (req, res) => {
  const username = req.body.username
  const password = req.body.passwd
  const db = require('../models')
  const Admins = db.admins
  const jwt = require('jsonwebtoken')
  const crypto = require('crypto')
  const hash = crypto.createHash('md5').update(password).digest('hex')

  function generateToken(user) {
    const token = jwt.sign(
      { username: user.username, passwd: user.passwd },
      'school-app-test',
      {
        expiresIn: '1h',
      },
    )
    return token
  }

  Admins.findOne({
    where: { username: username },
    //validating username
  })
    .then((user) => {
      if (user) {
        if (hash == user.passwd) {
          //   req.session.id = user.username
          const jwtToken = generateToken(user)
          res.status(200).send({ username: user.username, token: jwtToken })
        } else {
          res.status(401).send({
            message: 'unauthorized',
          })
        }
      } else {
        res.status(404).send({
          message: 'user not found',
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while login',
      })
    })
}
