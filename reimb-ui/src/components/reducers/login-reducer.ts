import { ILoginState } from ".";
import { User } from "../../models/user";



const initialState: ILoginState = {
    user: new User(0, '','','','','',[])
}


export const loginReducer = (state = initialState, action:any) => {

    switch(action.type) {
        case svLoginTypes.SUCCESSFUL_LOGIN: {
            return {
                ...state,
                user:action.payload.user
            }
        }
        default:
            return state
    }
}