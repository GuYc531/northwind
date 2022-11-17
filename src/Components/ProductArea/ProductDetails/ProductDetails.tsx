import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notifyService from "../../../Services/NotifyService";
import productsService from "../../../Services/ProductsService";
import appConfig from "../../../Utils/AppConfig";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductDetails.css";

function ProductDetails(): JSX.Element {

    const params = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState<ProductModel>();

    useEffect(() => {
        const id = +params.id;
        productsService.getOneProduct(id)
        .then(product => setProduct(product))
        .catch(err => notifyService.error(err));

    },[]);

    async function deleteProduct(){
        try {
            const ok = window.confirm("Are you sure you want to delete?");
        
            if (!ok) return;
            await productsService.deleteProduct(product.id);
            notifyService.success("product has been deleted");
            navigate("/products");
        }
        catch(err: any){
            notifyService.error(err);
        }
    }

    return (
        <div className="ProductDetails">
            <h3>Name: {product?.name}</h3>
            <h3>Price: ${product?.price}</h3>
            <h3>stock: {product?.stock}</h3>
            <img src={appConfig.productsImageUrl + product?.imageName} /> 
            <br/>
            <NavLink to="/products">Back</NavLink> 
            <span>   ||  </span>
            <NavLink to={"/products/edit/" + product?.id}>Edit</NavLink> 
            <span>   ||  </span>
            <NavLink to="/#" onClick={deleteProduct}>Delete</NavLink> 
       </div>
    );
}

export default ProductDetails;
