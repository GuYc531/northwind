import axios from "axios";
import ProductModel from "../Models/ProductModel";
import { addProductsAction, deleteProductsAction, ProductsActionType, ProductsStore, updateProductsAction } from "../Redux/ProductsState";
import appConfig from "../Utils/AppConfig";

class ProductsService{

    public async getAllProducts(): Promise<ProductModel[]> {
        
        let products = ProductsStore.getState().products;

        if (products.length === 0) {
            const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
            products = response.data;
            ProductsStore.dispatch({type: ProductsActionType.FetchProducts, payload: products});
        }
        return products;
        

    }


    public async getOneProduct(id: number): Promise<ProductModel> {

        let product = ProductsStore.getState().products.find(p => p.id === id);
        if (!product){
            const response = await axios.get<ProductModel>(appConfig.productsUrl + id)
            product = response.data;
        }
        
        return product;
    }
    
    public async addProduct(product: ProductModel): Promise<void> {
        const headers ={
            "Content-Type": "multipart/form-data"
        };
        const response = await axios.post<ProductModel>(appConfig.productsUrl, product,{headers});
        const addedProduct  =  response.data;
        ProductsStore.dispatch(addProductsAction(addedProduct));
    }

    public async updateProduct(product: ProductModel): Promise<void> {
        const headers ={"Content-Type": "multipart/form-data"};
        const response = await axios.put<ProductModel>(appConfig.productsUrl+ product.id, product,{headers});
        const updatedProduct  =  response.data;
        ProductsStore.dispatch(updateProductsAction(updatedProduct));

    }

    public async deleteProduct(id: number): Promise<void>{
        await axios.delete(appConfig.productsUrl +id);
        ProductsStore.dispatch(deleteProductsAction(id));
    }

}
const productsService = new ProductsService();

export default productsService;

// function getOneProduct(id: any, number: any) {
//     throw new Error("Function not implemented.");


