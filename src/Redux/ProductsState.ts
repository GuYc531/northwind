import { applyMiddleware, compose, createStore } from "redux";
import ProductModel from "../Models/ProductModel";
import { countActions, clearConsole } from "./Middleware";
import { logger } from "redux-logger"; // is the middleware fcuntions
import { composeWithDevTools } from "redux-devtools-extension";

//1. AppState - data in app level:
export class ProductsState {
    public products: ProductModel[] = [];
}

//2. actionType - what we can do on our state
export enum ProductsActionType{
    FetchProducts = "FetchProducts",
    AddProduct = "AddProduct",
    UpdateProduct = "UpdateProduct",
    DeleteProduct = "DeleteProduct"
}

//3. Action -  a Single action on the state
export interface ProductsAction {
    type: ProductsActionType;
    payload: any; //list of products or single product
} 

// 4. actioncreators - functions for creating action objects - eaach for diffirent action type
export function fetchProductsAction(products: ProductModel[]): ProductsAction {
    return {type: ProductsActionType.FetchProducts, payload: products};
}

export function addProductsAction(product: ProductModel): ProductsAction {
    // clearConsole()
    // console.clear();
    return {type: ProductsActionType.AddProduct, payload: product};
}

export function updateProductsAction(product: ProductModel): ProductsAction {
    return {type: ProductsActionType.UpdateProduct, payload: product};
}

export function deleteProductsAction(id : number): ProductsAction {
    return {type: ProductsActionType.DeleteProduct, payload: id};
}

//4. Reducer - preform actual operation
export function productsReducer(currentState = new ProductsState(), action: ProductsAction): ProductsState{
    const newState = {...currentState};

    switch(action.type){

        case ProductsActionType.FetchProducts: // here the payload is the list of all products
            newState.products = action.payload;    
            break;

            case ProductsActionType.AddProduct: // here the payload is a new product
            newState.products.push(action.payload);
            break;

            case ProductsActionType.UpdateProduct: // here the payload is existing product
            const indexToUpdate = newState.products.findIndex( p => p.id === action.payload.id);
            
            if(indexToUpdate >= 0)
            newState.products[indexToUpdate] = action.payload;
            break;

            case ProductsActionType.DeleteProduct: //here the payload is the product id
            const indexToDelete = newState.products.findIndex( p => p.id === action.payload);
            if(indexToDelete >= 0)
            newState.products.splice(indexToDelete, 1); // delete only 1 product
            break;
    }
return newState;
}

// export function clearConsole():void{
//     console.clear();
// }
// store -  the managing object without middleware and without devtools
// export const ProductsStore = createStore(productsReducer, applyMiddleware(countActions , logger));


//store without devtools with middleware
// export const ProductsStore = createStore(
//     productsReducer,
//      applyMiddleware(countActions , logger));

//store with devtools with middleware
export const ProductsStore = createStore(
    productsReducer,
    compose(applyMiddleware(countActions , logger),
    applyMiddleware(clearConsole),
    composeWithDevTools())
    );