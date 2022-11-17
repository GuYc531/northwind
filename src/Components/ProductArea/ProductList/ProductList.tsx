import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import usePageTitle from "../../../Utils/usePageTitle";
import Spinner from "../../SharedArea/Spinner/Spinner";
import ProductCard from "../ProductCard/ProductCard";
import TotalProducts from "../TotalProducts/TotalProducts";
import "./ProductList.css";

function ProductList(): JSX.Element {
    usePageTitle("Product Page");

    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {

        productsService.getAllProducts()
        .then(products => setProducts(products))
        .catch(err => alert(err));
    
    }, [])

    return (
        <div className="ProductList">
            <TotalProducts />
            {products.length === 0 && <Spinner />}
            <NavLink to="/products/new">➕</NavLink>
            {products.map(p => <ProductCard key={p.id}  product ={p} />)}
            
        </div>
    );
}

export default ProductList;
