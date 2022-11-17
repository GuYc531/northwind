import { Store } from "redux";
import { ProductsAction, ProductsActionType, ProductsState } from "./ProductsState";

let counter = 0;

export function countActions(productsStore : any){
    return function(next: Function){
        return function(action: ProductsAction){
            
            console.log(`${action.type}, total actions, ${++counter}`);

            next(action);
        };
    };
};

export function clearConsole(productsStore : any){
    return function(next: Function){
        return function(action: ProductsAction){
            
            // console.log(`${action.type}, total actions, ${++counter}`);
            if(action.type == ProductsActionType.AddProduct) 
                console.clear();
            next(action);
        };
    };
};