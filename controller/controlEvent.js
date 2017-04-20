const eventEO = require('../models/event')

module.exports = {

  createEO: (req, res)=> {
    let newEvent = new eventEO({
      date: new Date(req.body.date),
      title: req.body.title,
      name_event: req.body.name_event,
      email_eo: req.body.email_eo
    }).save((err, ev)=> {
      if(err.errors) {
        if(err.errors.date) {
          res.send(err.errors.date.message)
        } else if (err.errors.title) {
          res.send(err.errors.title)
        } else if (err.errors.name_event) {
          res.send(err.errors.name_event.message)
        } else if (err.errors.email_eo) {
          res.send(err.errors.email_eo.message)
        }
      } else if(err.code == 11000){
        res.send('Title already exist!!!')
      } else {
        res.send('Data created')
      }
    })
  },
  findEO: (req, res)=> {
    eventEO.find({}, (err, evs)=> {
      if(err) res.send(err)
      res.send(evs)
    })
  },
  updateEO: (req, res)=> {
    eventEO.findByIdAndUpdate( {_id:req.params.id}, {
      date : new Date(req.body.date),
      title: req.body.title,
      name_event: req.body.name_event,
      email_eo: req.body.email_eo
    }, (err, ev)=> {
      if(err) res.send(err)
      res.send('Data Updated')
    })
  },
  deleteEO: (req, res)=> {
    eventEO.findByIdAndRemove({_id: req.params.id}, (err, ev)=> {
      if(err) res.send(err)
      res.send('Data deleted')
    })
  }
}
