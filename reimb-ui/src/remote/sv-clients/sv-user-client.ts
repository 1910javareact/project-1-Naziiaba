import axios from 'axios'

export const svUserClient = axios.create({
    baseURL: 'http://34.201.29.34:8080', 
    headers:{
        'Content-Type': 'application/json'
    },
    withCredentials:true
})