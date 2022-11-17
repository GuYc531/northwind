import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ProductsAction, ProductsState } from "../../../Redux/ProductsState";
import "./TotalOutOfStock.css";

function TotalOutOfStock(): JSX.Element {
    
    const total: number = +useSelector<ProductsState>((productsState) => {
        return productsState.products.filter(p => p.stock == 0).length;
    });

    const dispatch = useDispatch(); //not in use in this component

    return (
        <div className="TotalOutOfStock">
			<span>Total out of stock: {total}</span>
        </div>
    );
}

export default TotalOutOfStock;
