

export const userLoginTypes = {
    INVALID_CREDENTIALS: 'P1_LOGIN_INVALID_CREDENTIALS',
    SUCCESSFUL_LOGIN: 'P1_LOGIN_SUCCESFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'P1_LOGIN_FAILED_LOGIN'
}

export const userLogin = (username:string, password:string) => async (dispatch: any) => {

    try {
        let res = await userLogin(username, password)

        if(res.status === 200){

            dispatch({
                type:userLoginTypes.SUCCESSFUL_LOGIN,
                payload:{
                    user:res.body
                }
            })
        } else {
            dispatch ({
                type:userLoginTypes.INVALID_CREDENTIALS
            })
        }
    }catch(e) {
        dispatch ({
            type:userLoginTypes.UNSUCCESSFUL_LOGIN
        })
    }

}