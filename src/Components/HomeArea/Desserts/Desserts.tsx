import "./Desserts.css";
import dessertImage from "../../../Assets/Images/summer-desserts-500x500.jpg";
import { SyntheticEvent } from "react";

function Desserts(): JSX.Element {

    const items: {id: number, name: string}[]= [
        {id:1, name:"Ice cream"},
        {id:2, name:"Apple pie"},
        {id:3, name:"creme brunette"},
        {id:4, name:"cookie"}
    ];

    // function totalDesserts(): void {
    //     alert("total Desserts:" + items.length);
    // }

    function totalDesserts(args: SyntheticEvent): void {
        console.log(args.target)
        alert("total Desserts:" + items.length);
    }

    return (
        <div className="Desserts Box">
            <img src={dessertImage}></img>
            {
            items.length === 0 && 
            <span>Today no Desserts</span>
            }
            {items.length > 0 && <span> Our Desserts: </span>}
            {items.map(item => <span key={item.id}> {item.name} 🍰</span>)}
            <button onClick={totalDesserts}> Total desserts</button>
        </div>
    );
}

export default Desserts;
