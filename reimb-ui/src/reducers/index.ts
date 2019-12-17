import { User } from "../models/user";
import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";



export interface ILoginState {
    user: User
}

export interface IState{
    login:ILoginState
}

export interface IUserAdminState {
    user: User[]
}

export const state = combineReducers<IState>({
    login: loginReducer
    
})