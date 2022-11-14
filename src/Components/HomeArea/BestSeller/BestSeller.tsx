import { useState } from "react";
import "./BestSeller.css";

function BestSeller(): JSX.Element {

    const [name, setName] = useState<string>();
    const [TotalItems, setTotalItems] = useState<number>();



    function show(): void {
        setName("guy");
        setTotalItems(77);

    }

    return (
        <div className="BestSeller Box">
			<button onClick={show}> Show best seller</button>
            <span> Name: {name}, Total items: {TotalItems}</span>
        </div>
    );
}

export default BestSeller;
