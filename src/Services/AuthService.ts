import axios from "axios";
import CredentialsModel from "../Models/CredentialsModel";
import UserModel from "../Models/UserModel";
import { authstore, loginAction, logoutAction, registerAction } from "../Redux/AuthState";
import appConfig from "../Utils/AppConfig";

class AuthService{

    public async register(user: UserModel): Promise<void> {
        console.log(user);
        
        const response = await axios.post<string>(appConfig.registerUrl, user);
        const token =response.data;
        authstore.dispatch(registerAction(token));
    }

    public async login(credentials: CredentialsModel): Promise<void> {
        const response = await axios.post<string>(appConfig.loginUrl, credentials);
        const token =response.data;
        authstore.dispatch(loginAction(token));
    }

    public logout(): void {
        authstore.dispatch(logoutAction());
    }

    public isLoggedIn(): boolean {
        return authstore.getState().token !== null;
    }


}


const authService = new AuthService();

export default authService;