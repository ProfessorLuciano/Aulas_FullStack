import axios, { create } from 'axios'

const apiLocal = axios.create({
    baseURL: 'http://localhost:3333'
})

export default apiLocal