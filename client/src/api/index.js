import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertContact = payload => api.post(`/contact`, payload)
export const getAllContacts = () => api.get(`/contacts`)

const apis = {
    insertContact,
    getAllContacts
}

export default apis