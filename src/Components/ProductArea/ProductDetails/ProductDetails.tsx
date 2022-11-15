import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notifyService from "../../../Services/NotifyService";
import productsService from "../../../Services/ProductsService";
import appConfig from "../../../Utils/AppConfig";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductDetails.css";

function ProductDetails(): JSX.Element {

    const params = useParams()
    const [product, setProduct] = useState<ProductModel>();

    useEffect(() => {
        const id = +params.id;
        productsService.getOneProduct(id)
        .then(product => setProduct(product))
        .catch(err => notifyService.error(err));

    },[]);

    return (
        <div className="ProductDetails">
            <h3>Name: {product?.name}</h3>
            <h3>Price: ${product?.price}</h3>
            <h3>stock: {product?.stock}</h3>
            <img src={appConfig.productsImageUrl + product?.imageName} /> 
            <br/>
            <NavLink to="/products">Back</NavLink> 
       </div>
    );
}

export default ProductDetails;
