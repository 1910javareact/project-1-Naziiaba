import { oUserClient } from "./orion-user-client";

export async function oRemoteReimbursement(userId: number) {
    try {
        const response = await oUserClient.get('reimbursement/author/userId/' + userId)
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

export async function oRemoteReimbursementByStatusId(statusId: number) {
    try {
        const response = await oUserClient.get('reimbursement/status/' + statusId)
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

export async function oRemoteSubmitReimbursement(author:number, amount:number, dateSubmitted:number, dateResolved:number, description:string, resolver:number, status: number, type:number) {
    const fields = {
        author: 0,
        amount: amount,
        dateSubmitted: 0,
        dateResolved: 0,
        description: '',
        resolver: 0,
        status: 0,
        type: 0,
    }
    try {
        let response = await oUserClient.post('/reimbursements', fields)
        if (response.status === 201) {
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
