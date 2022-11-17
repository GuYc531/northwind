import UserModel from "../Models/UserModel";


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

//5  - reducer

//6 - store