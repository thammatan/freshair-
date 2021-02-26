const Contact = require('../models/contact-model')

createContact = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a contact',
        })
    }

    const contact = new Contact(body)

    if (!contact) {
        return res.status(400).json({ success: false, error: err })
    }

    contact
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: contact._id,
                message: 'Contact created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Contact not created!',
            })
        })
}

getContacts = async (req, res) => {
    await Contact.find({}, (err, contacts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!contacts.length) {
            return res
                .status(404)
                .json({ success: false, error: `Contact not found` })
        }
        return res.status(200).json({ success: true, data: contacts })
    }).catch(err => console.log(err))
}

module.exports = {
    createContact,
    getContacts
}