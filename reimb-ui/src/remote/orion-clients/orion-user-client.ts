import axios from 'axios'

export const oUserClient = axios.create({
    baseURL: 'http://localhost:1880',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})