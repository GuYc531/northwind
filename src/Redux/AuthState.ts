import { createStore } from "redux";
import UserModel from "../Models/UserModel";
import jwtDecode from "jwt-decode";


//1 - state
export class AuthState {
    public token: string;
    public user: UserModel = null;
}
//2  - actiontype
export enum AuthActionType {
    Register = "Register",
    Login = "Login",
    Logout = "Logout"
}
//3  - action
export interface AuthAction {
    type: AuthActionType;
    payload? : string;
}
//4 - action creators
export function registerAction(token: string): AuthAction{
    return {type: AuthActionType.Register, payload: token}
}

export function loginAction(token: string): AuthAction{
    return {type: AuthActionType.Register, payload: token}
}

export function logoutAction(): AuthAction{
    return {type: AuthActionType.Login}
}

export function authReducer (currentState = new AuthState(), action: AuthAction): AuthState{
    const newState = {...currentState}

    switch(action.type){

        case AuthActionType.Register: // here the payload is token   
        case AuthActionType.Login: // here the payload is a token
            newState.token = action.payload;
            newState.user = jwtDecode<{user: UserModel}>(action.payload).user;
            break;

        case AuthActionType.Logout: // here no payload 
            newState.token = newState.user = null;
        
            break;

    }
    return newState;
}
//6 - store

export const authstore = createStore(authReducer);