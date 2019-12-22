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
