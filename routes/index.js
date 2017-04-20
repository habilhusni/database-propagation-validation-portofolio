const express = require('express')
const router = express.Router()
const events = require('../controller/controlEvent')

/* Routes */
router.get('/event', events.findEO)
router.post('/event', events.createEO)
router.put('/event/:id', events.updateEO)
router.delete('/event/:id', events.deleteEO)

module.exports = router
