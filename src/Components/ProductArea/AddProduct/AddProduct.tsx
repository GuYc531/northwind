import { useForm } from "react-hook-form";
import ProductModel from "../../../Models/ProductModel";
import "./AddProduct.css";

function AddProduct(): JSX.Element {

    const {register} = useForm<ProductModel> ()

    return (
        <div className="AddProduct Box">
			<h2>Add Product:</h2>

            <form>

                <label> Name:</label>
                <input type="text" {...register("name")}/>
                <label> Price:</label>
                <input type="number" step="0.01"/>
                <label> Stock:</label>
                <input type="number" />

                <button>Add</button>
            </form>
        </div>
    );
}

export default AddProduct;
