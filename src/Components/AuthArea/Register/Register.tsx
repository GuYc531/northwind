import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Services/AuthService";
import notifyServices from "../../../Services/NotifyService";
import "./Register.css";

function Register(): JSX.Element {
    
    const {register, handleSubmit, formState} = useForm<UserModel>();
    const navigate = useNavigate();

    async function send (user: UserModel){
        try{
            await authService.register(user);
            notifyServices.success("welcome"+ user.username);
            navigate("/home");
        }
        catch(err: any){
            notifyServices.error(err)
        }
    }
    
    return (
        <div className="Register Box">
            <h2>Register</h2>
            <form onSubmit={handleSubmit(send)} >
			<label> first name</label>
            <input type="text" {...register("firstName")} />

            <label> last name</label>
            <input type="text" {...register("lastName")} />

            <label> user name</label>
            <input type="text" {...register("username")} />

            <label> password</label>
            <input type="password" {...register("password")} />

            <button>register</button>
            </form>

        </div>
    );
}

export default Register;
