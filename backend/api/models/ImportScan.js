// model ImportScan
// fields: _id, type, input, decoded, date(expires 11min)
const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  type: String,
  input: String,
  decoded: String,
  fork: String,
  expires: { type: Date, default: +new Date() + 11*60*1000, expires: 0 } // expires in 11 minutes (client js assumes 10 minutes to account for delay)
})

const ImportScan = mongoose.model('ImportScan', Schema)
module.exports = ImportScan