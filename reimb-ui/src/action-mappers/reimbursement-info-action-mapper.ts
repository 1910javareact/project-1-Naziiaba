import { oRemoteReimbursement } from "../remote/orion-clients/orion-reimbursement"

export const oReimbursementType = {
    REIMBURSEMENT_FOUND_SUCCESSFUL: 'REIMBURSEMENT_FOUND_SUCCESSFUL',
    FAILED_REIMBURSEMENT_INFO: 'FAILED_REIMBURSEMENT_INFO'
}

export const oReimbursementInfo = (userId: number) => async (dispatch: any) => {
    try {
        let res = await oRemoteReimbursement(userId)
        // Request successful
        if (res.status === 200) {
            dispatch({
                type: oReimbursementType.REIMBURSEMENT_FOUND_SUCCESSFUL,
                payload: {
                    reimbursement: res.body
                }
            })
        } else {
            dispatch({
                type: oReimbursementType.FAILED_REIMBURSEMENT_INFO
            })
        }

    } catch (e) {
        dispatch({
            type: oReimbursementType.FAILED_REIMBURSEMENT_INFO
        })
    }
}