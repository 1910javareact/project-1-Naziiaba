import { oRemoteReimbursementByStatusId } from "../remote/orion-clients/orion-reimbursement"

export const oReimbursementByStatusIdType = {
    REIMBURSEMENT_BY_STATUS_ID_SUCCESSFUL: 'REIMBURSEMENT_BY_STATUS_ID_SUCCESSFUL',
    FAILED_REIMBURSEMENT_BY_STATUS_ID: 'FAILED_REIMBURSEMENT_BY_STATUS_ID'
}

export const oReimbursementByStatusId = (statusId: number) => async (dispatch: any) => {
    try {
        let res = await oRemoteReimbursementByStatusId(statusId)
        if (res.status === 200) {
            dispatch({
                type: oReimbursementByStatusIdType.REIMBURSEMENT_BY_STATUS_ID_SUCCESSFUL,
                payload: {
                    reimbursement: res.body
                }
            })
        } else {
            dispatch({
                type: oReimbursementByStatusIdType.FAILED_REIMBURSEMENT_BY_STATUS_ID
            })
        }

    } catch (e) {
        dispatch({
            type: oReimbursementByStatusIdType.FAILED_REIMBURSEMENT_BY_STATUS_ID
        })
    }
}