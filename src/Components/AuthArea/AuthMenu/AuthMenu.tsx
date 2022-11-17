import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import { authstore } from "../../../Redux/AuthState";
import authService from "../../../Services/AuthService";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {

    const [user,  setUser] = useState<UserModel>();
    const navigate =  useNavigate();
    useEffect(() => {
        setUser(authstore.getState().user);
        authstore.subscribe(() => setUser(authstore.getState().user));
    }, []);

    function logout(){
        authService.logout();
        navigate("/home");
    }
    if (user){
        return (
            <div className="AuthMenu">
                <span>Hello {user.firstName} {user.lastName}</span>
                <span> || </span>
                <NavLink to="#"> Logout </NavLink>
            </div>
        )
    }

    return (
        <div className="AuthMenu">
			<span>Hello Guest</span>
                <span> || </span>
                <NavLink to="/register"> register </NavLink>
                <span> || </span>
                <NavLink to="/login"> login </NavLink>
        </div>
    );
}

export default AuthMenu;
