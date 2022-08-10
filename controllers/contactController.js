const express = require('express')
const {sequelize, Contact} = require('../models');

module.exports = {
    getAllContacts: async(req, res) => {
        try {
            const contacts = await Contact.findAll({});
            return res.json(contacts);
        } catch(err) {
            return res.status(500).json({err: "An error occurred"})
        }
    },

    addContact: async(req, res) => {
        const {email, firstName, lastName, avatar, phone, company} = req.body
        try {
            const contact = await Contact.create({email, firstName, lastName, avatar, phone, company});
            return res.json(contact);
        } catch(err) {
            return res.status(500).json
        }
    },

    updateContact: async(req, res) => {
        const {id, email, firstName, lastName, avatar, phone, company} = req.body
        console.log("Id: " + id)
        try {
            const contact = await Contact.findOne({
                where: {id}
            })
            contact.email = email;
            contact.firstName = firstName;
            contact.lastName = lastName;
            contact.avatar = avatar
            contact.phone = phone;
            contact.company = company;

            await contact.save();
            return res.status(200).json(contact)
        } catch(err) {
            return res.status(500).json({err: "Could not update user"})
        }
    },

    deleteContact: async(req, res) => {
        const {id} = req.body
        console.log(id)
        try {
            const contact = await Contact.findOne({
                where: {id}
            })
            await contact.destroy();
            return res.status(200).json({message: "User Deleted"})
        } catch(err) {
            return res.status(500).json({err: "Could not delete user"})
        }
    }
}
