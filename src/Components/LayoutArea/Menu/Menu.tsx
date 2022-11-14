import "./Menu.css";
import  { NavLink } from "react-router-dom"
function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/home"> home</NavLink>
            <NavLink to="/products"> products</NavLink>
            <NavLink to="/about"> about</NavLink>

			
        </div>
    );
}

export default Menu;
