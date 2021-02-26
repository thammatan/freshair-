
const express = require('express')

const ContactCtrl = require('../controllers/contact-ctrl')

const router = express.Router()

router.post('/contact', ContactCtrl.createContact)
router.get('/contacts', ContactCtrl.getContacts)

module.exports = router