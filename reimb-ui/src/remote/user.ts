import { svUserClient } from "./user-client";


export async function userLogin(username:string, password:string){
    const credentials = {
        username,
        password
    }
    try {
        const response = await svUserClient.post('/login', credentials)
        if(response.status === 200){
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch(e) {
        console.log(e);throw new Error('Something Went Wrong')
    }
}

//To receive all users 

export const getAllUsers = async() => {
    try {
        let response = await svUserClient.get('/users')
        if(response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        }else {
            return {
                status: response.status,
                body: undefined
            }
        }
    }catch(e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}