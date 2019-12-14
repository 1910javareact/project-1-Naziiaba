import { siliconValleyLogin } from "../remote/sv-clients/sv-user"

export const svLoginTypes = {
    INVALID_CREDENTIALS: 'P1_LOGIN_INVALID_CREDENTIALS',
    SUCCESSFUL_LOGIN: 'P1_LOGIN_SUCCESSFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'P1_LOGIN_FAILED_LOGIN'
}

export const svLogin = (username:string, password:string) => async (dispatch: any) => {

    try {
        let res = await siliconValleyLogin(username, password)

        if(res.status === 200){

            dispatch({
                type:svLoginTypes.SUCCESSFUL_LOGIN,
                payload:{
                    user:res.body
                }
            })
        } else {
            dispatch ({
                type:svLoginTypes.INVALID_CREDENTIALS
            })
        }
    }catch(e) {
        dispatch ({
            type:svLoginTypes.UNSUCCESSFUL_LOGIN
        })
    }

}