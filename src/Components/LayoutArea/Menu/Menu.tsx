import "./Menu.css";
import  { NavLink } from "react-router-dom"
import TotalProducts from "../../ProductArea/TotalProducts/TotalProducts";
import TotalOutOfStock from "../../ProductArea/TotalOutOfStock/TotalOutOfStock";
function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/home"> home</NavLink>
            <NavLink to="/products"> products</NavLink>
            <NavLink to="/about"> about</NavLink>
			<TotalProducts />
            <TotalOutOfStock />
        </div>
    );
}

export default Menu;
