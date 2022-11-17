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
        const headers ={
            "Content-Type": "multipart/form-data"
        };
        const response = await axios.post<ProductModel>(appConfig.productsUrl, product,{headers});
        const addedProduct  =  response.data;
    }

    public async updateProduct(product: ProductModel): Promise<void> {
        const headers ={"Content-Type": "multipart/form-data"};
        const response = await axios.put<ProductModel>(appConfig.productsUrl+ product.id, product,{headers});
        const updatedProduct  =  response.data;
    }

    public async deleteProduct(id: number): Promise<void>{
        await axios.delete(appConfig.productsUrl +id);
    }

}
const productsService = new ProductsService();

export default productsService;

// function getOneProduct(id: any, number: any) {
//     throw new Error("Function not implemented.");


