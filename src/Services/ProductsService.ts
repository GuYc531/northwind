import axios from "axios";
import ProductModel from "../Models/ProductModel";
import appConfig from "../Utils/AppConfig";

class ProductsService{

    public async getAllProducts(): Promise<ProductModel[]> {
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        const products = response.data;
        return products;
    }


    public async getOneProduct(id: number): Promise<ProductModel> {
        const response = await axios.get<ProductModel>(appConfig.productsUrl + id)
        const product = response.data;
        return product;
    }
    
    public async addProduct(product: ProductModel): Promise<void> {
        const response = await axios.post<ProductModel>(appConfig.productsUrl, product);
        const addedProduct  =  response.data;
        // console.log(addedProduct);
    }

}
const productsService = new ProductsService();

export default productsService;

function getOneProduct(id: any, number: any) {
    throw new Error("Function not implemented.");
}
