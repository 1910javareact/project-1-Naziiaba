import axios from 'axios'

export const svUserClient = axios.create({
    // baseURL: 'http://34.201.29.34:8080',
    baseURL: 'http://localhost:1880',
    headers:{
        'Content-Type': 'application/json'
    },
    withCredentials:true
})