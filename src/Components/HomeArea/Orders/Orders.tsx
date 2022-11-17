import BackgroundByHour from "../../SharedArea/BackgroundByHour/BackgroundByHour";
import "./Orders.css";

function Orders(): JSX.Element {
    return (
        <div className="Orders">
			<span>Delivery Hours: 09:00 - 17:00</span>
        </div>
    );
}

export default BackgroundByHour(Orders);
