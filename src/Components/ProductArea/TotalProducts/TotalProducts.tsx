import { useEffect, useState } from "react";
import {  ProductsStore } from "../../../Redux/ProductsState";
import "./TotalProducts.css";

function TotalProducts(): JSX.Element {

    const [count, setCount] = useState<number>();

    useEffect(() => {
        setCount(ProductsStore.getState().products.length);
        
        ProductsStore.subscribe( () => {
            setCount(ProductsStore.getState().products.length);
        });
    }, [])

    return (
        <div className="TotalProducts">
			<span> Total products: {count}</span>
        </div>
    );
}

export default TotalProducts;
