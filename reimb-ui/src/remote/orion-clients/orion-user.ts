import { oUserClient } from "./orion-user-client";

export async function oRemoteLogin(username: string, password: string) {
    const credentails = {
        username,
        password
    }
    try {
        const response = await oUserClient.post('/login', credentails)
        if (response.status === 200) {
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
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}

export const getAllUsers = async () => {
    try {
        let response = await oUserClient.get('/users')
        if (response.status === 200) {
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
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}

export const getUserById = async (userId: number) => {
    try {
        let response = await oUserClient.get('/users/' + userId)
        if (response.status === 200) {
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
    } catch (e) {
        console.log(e)
        throw new Error('Something Went Wrong')
    }
}

export async function updateUser(userId: number, username: string, password: string, firstName: string, lastName: string, email: string) {
    const updateFields = {
        userId,
        username,
        password,
        firstName,
        lastName,
        email,
    }
    try {
        let response = await oUserClient.patch('/users', updateFields)
        if (response.status === 200) {
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
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}