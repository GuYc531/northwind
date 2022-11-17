import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";
import UserModel from "../../../Models/UserModel";
import { authstore } from "../../../Redux/AuthState";
import authService from "../../../Services/AuthService";
import notifyServices from "../../../Services/NotifyService";
import "./Login.css";

function Login(): JSX.Element {
    const {register, handleSubmit, formState} = useForm<UserModel>();
    const navigate = useNavigate();

    async function send (credentials: CredentialsModel){
        try{
            await authService.login(credentials);
            notifyServices.success("welcome"+ authstore.getState().user.firstName);
            navigate("/home");
        }
        catch(err: any){
            notifyServices.error(err)
        }
    }
    
    return (
        <div className="Login Box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit(send)}>

                <label> user name</label>
                <input type="text" {...register("username")} />

                <label> password</label>
                <input type="text" {...register("password")} />

                <button>login</button>
            </form>
        </div>
    );
}

export default Login;
