import { User } from "../../models/user";
import { combineReducers } from "redux";





export interface ILoginState {
    user: User
}

export interface IState {
    login:ILoginState
}

export const state = combineReducers<IState>({
    login:loginReducer
})