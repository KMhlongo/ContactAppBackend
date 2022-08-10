const express = require('express');
const {sequelize, Contact} = require('../models');

const { getAllContacts, 
    addContact, 
    updateContact, 
    deleteContact } = require('../controllers/contactController');
const contact = require('../models/contact');

const router = express.Router();

router.get('/', getAllContacts);
router.post('/', addContact);
router.put('/', updateContact);
router.delete('/', deleteContact);

module.exports = router