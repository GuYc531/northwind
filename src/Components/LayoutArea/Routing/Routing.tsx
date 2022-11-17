import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import ProductDetails from "../../ProductArea/ProductDetails/ProductDetails";
import ProductList from "../../ProductArea/ProductList/ProductList";
import PageNotFound from "../PageNotFound/PageNotFound";
import LoadableExport from "react-loadable";
import Spinner from "../../SharedArea/Spinner/Spinner";
import AddProduct from "../../ProductArea/AddProduct/AddProduct";
import EditProduct from "../../ProductArea/EditProduct/EditProduct";

function Routing(): JSX.Element {

    const LazyAbout = LoadableExport({
        loader: ()=> import("../../AboutArea/About/About"),
        // loading: () => {return null}
        loading: Spinner
    })


    return (

        <>
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/products" element={<ProductList />}/>
                <Route path="/products/details/:id" element={<ProductDetails/>}/>
                <Route path="/products/new" element={<AddProduct/>}/>
                <Route path="/products/edit/:id" element={<EditProduct/>}/>
                <Route path="/about" element={<LazyAbout />}/>
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="*" element={<PageNotFound/>}/>

            </Routes>
        </>
        
    );
}

export default Routing;
