import BestSeller from "../BestSeller/BestSeller";
import Clock from "../Clock/Clock";
import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Sale from "../Sale/Sale";
import Search from "../Search/Search";
import Survey from "../Survey/Survey";
import Tune from "../Tune/Tune";
import Wishlist from "../Wishlist/Wishlist";
import "./Home.css";

function Home(): JSX.Element {

    function HandleSurvey(surveyReport: string) {
        alert("survey result " + surveyReport);
    }
    
    return (
        <div className="Home">

            <Discount />

            <Desserts />

            <Sale category="Bevreges" percent={10}/>
            <Sale category="booze" percent={44}/>
            <Sale category="cakes" percent={20}/>

            <Survey HandleSurvey={HandleSurvey} question="How is our services?"/>

            <BestSeller />

            <Tune />
            <Search />
            <Clock />
            <Wishlist />
        </div>
    );
}

export default Home;
