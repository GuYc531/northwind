import { SyntheticEvent, useState } from "react";
import "./Wishlist.css";

function Wishlist(): JSX.Element {

    const [Item , setItem] = useState<string>("");
    const [items, setItems] = useState<string[]>([]) 

    function handleItem(args: SyntheticEvent): void{
        const input: HTMLInputElement = args.target as HTMLInputElement;
        const value = input.value;
        setItem(value);
    }
    
    function updateWishList(): void {
        const duplicate = [...items]
        duplicate.push(Item+ " ")
        setItems(duplicate)

        setItem("");
    }

    return (
        <div className="Wishlist Box">
			<span>black friday wishlist:</span>
            <input type="search" value={Item} onChange={handleItem} />
            <button onClick={updateWishList}>Add </button>
            { items.map( (item, index) => <span key={index}> {item}</span>)}
        </div>
    );
}

export default Wishlist;
