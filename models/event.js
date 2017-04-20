const mongoose = require('mongoose')
const Schema = mongoose.Schema

let eventOrgSchema = new Schema({
  date: {type: Date, required: true},
  title: {type: String, required:true, unique: true},
  name_event: {type: String, required:true},
  email_eo: {type: String, required: true}
})

let EventOrg = mongoose.model('EventOrg', eventOrgSchema)
module.exports = EventOrg

eventOrgSchema.path('email_eo').validate((value)=> {
  let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return emailReg.test(value)
}, `Please input the correct email format`)