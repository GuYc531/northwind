import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Home from "../../HomeArea/Home/Home";
import ProductDetails from "../../ProductArea/ProductDetails/ProductDetails";
import ProductList from "../../ProductArea/ProductList/ProductList";
import PageNotFound from "../PageNotFound/PageNotFound";

function Routing(): JSX.Element {
    return (

        <>
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/products" element={<ProductList />}/>
                <Route path="/products/details/:id" element={<ProductDetails/>}/>

                <Route path="/about" element={<About />}/>
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="*" element={<PageNotFound/>}/>

            </Routes>
        </>
        
    );
}

export default Routing;
