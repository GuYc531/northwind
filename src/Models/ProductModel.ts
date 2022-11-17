import { RegisterOptions } from "react-hook-form";

class ProductModel {
	public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public imageName: string;
    public image: File;

    public static nameValidation: RegisterOptions = {
        required: {value: true, message: "missing name"},
        minLength: {value:3 , message: "Name too short"},
        maxLength: {value: 50, message: "Name too long"}
    };

    public static priceValidation: RegisterOptions = {
        required: {value: true, message: "missing price"},
        min: {value:0 , message: "Price too short"},
        max: {value:1000 , message: "Price too high"}

    };

    public static stockValidation: RegisterOptions = {
        required: {value: true, message: "missing stock"},
        min: {value:0 , message: "stock too short"},
        max: {value:1000 , message: "stock too high"}

    }
    public static imageValidation: RegisterOptions = {
        required: {value: true, message: "missing image"}
        
    };
}

export default ProductModel;
