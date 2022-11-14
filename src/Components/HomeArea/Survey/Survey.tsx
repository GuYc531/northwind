import { SyntheticEvent } from "react";
import "./Survey.css";

interface SurveyProps{
    HandleSurvey: (str: string) => void;
    question: string;
}

function Survey(props: SurveyProps): JSX.Element {

    // function Poor(): void {
    //     props.HandleSurvey("poor")
    // }

    // function Mid(): void {
    //     props.HandleSurvey("Mid")
    // }

    // function Great(): void {
    //     props.HandleSurvey("Great")
    // }

    function Opinion(result: string) {
        props.HandleSurvey(result)

    }

    return (
        <div className="Survey Box">
			<span>{props.question}</span>
            <button onClick={()=> Opinion("poor")}>Poor</button>
            <button onClick={()=> Opinion("Mid")}>Mid</button>
            <button onClick={()=> Opinion("Great")}>Great</button>
        </div>
    );
}

export default Survey;
