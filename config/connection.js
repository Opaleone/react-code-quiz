const { connect, connection } = require('mongoose')

connect('mongodb://localhost/codequizDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = connection