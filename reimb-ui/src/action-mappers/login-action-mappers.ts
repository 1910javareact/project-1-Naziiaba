import { oRemoteLogin } from "../remote/orion-clients/orion-user"

export const oLoginType = {
    INVALID_CREDENTIALS: 'LOGIN_INVALID_CREDENTIALS',
    SUCCESSFUL_LOGIN: 'LOGIN_SUCCESSFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'LOGIN_FAILED_LOGIN'
}

export const oLogin = (username: string, password: string) => async (dispatch: any) => {
    try {
        let res = await oRemoteLogin(username, password)
        // Succesful login
        if (res.status === 200) {
            dispatch({
                type: oLoginType.SUCCESSFUL_LOGIN,
                payload: {
                    user: res.body
                }
            })
        } else {
            dispatch({
                type: oLoginType.INVALID_CREDENTIALS
            })
        }
    } catch (e) {
        dispatch({
            type: oLoginType.UNSUCCESSFUL_LOGIN
        })
    }
}