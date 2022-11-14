import { SyntheticEvent, useState } from "react";
import "./Search.css";

function Search(): JSX.Element {
    
    const [Item , setItem] = useState<string>("");

    function handleItem(args: SyntheticEvent): void{
        const input: HTMLInputElement = args.target as HTMLInputElement;
        const value = input.value;
        setItem(value);
    }

    function searchWeb(): void {
        alert("searing for:" + Item);
        setItem("");
    }

    return (
        <div className="Search Box">
			<label>Search:</label>
            <input type="search" value={Item} onChange={handleItem}/>
            <button onClick={searchWeb}>🔍🔎</button>
        </div>
    );
}

export default Search;
