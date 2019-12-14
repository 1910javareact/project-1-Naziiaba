

export const svLoginTypes = {
    INVALID_CREDENTIALS: 'P1_LOGIN_INVALID_CREDENTIALS',
    SUCCESSFUL_LOGIN: 'P1_LOGIN_SUCCESFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'P1_LOGIN_FAILED_LOGIN'
}

export const svLogin = (username:string, password:string) => async (dispatch: any) => {

    try {
        let res = await userLogin(username, password)

        if(res.status === 200){

            dispatch({
                type:myLoginTypes.SUCCESSFUL_LOGIN,
                payload:{
                    usr:res.body
                }
            })
        } else {
            dispatch ({
                type:myLoginTypes.INVALID_CREDENTIALS
            })
        }
    }catch(e) {
        dispatch ({
            type:myLoginTypes.UNSUCCESSFUL_LOGIN
        })
    }

}