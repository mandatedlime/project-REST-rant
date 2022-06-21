require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://joramobbus:jo5115621@cluster0.ao1j6jd.mongodb.net/rest-rant', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')