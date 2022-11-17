import { memo } from "react";
import "./DayPartIcon.css";

interface DayPartIconProps {
	hour: number;
}

function DayPartIcon(props: DayPartIconProps): JSX.Element {
    
    console.log("DayPartIcon rendered" + props.hour);

    function getIconByHour():string {
        if (props.hour >= 6 && props.hour <= 10) return "💨";
        if (props.hour >= 11 && props.hour <= 15) return "🔯";
        if (props.hour >= 16 && props.hour <= 20) return "☢";
        return "🚾"

    }

    return (
        <div className="DayPartIcon">
			<span> {getIconByHour()}</span>
        </div>
    );
}

export default  memo(DayPartIcon);
