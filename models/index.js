require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://joramobbus:<password>@cluster0.ao1j6jd.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')