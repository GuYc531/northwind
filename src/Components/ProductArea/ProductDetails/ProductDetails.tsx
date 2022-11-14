import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductDetails.css";

function ProductDetails(): JSX.Element {

    const params = useParams()

    useEffect(() => {
        const id = +params.id;
        console.log(id)


    },[]);

    return (
        <div className="ProductDetails">
			Product Details...
            
        </div>
    );
}

export default ProductDetails;
