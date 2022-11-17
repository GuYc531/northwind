import usePageTitle from "../../../Utils/usePageTitle";
import DayPartIcon from "../../SharedArea/DayPartIcon/DayPartIcon";
import BestSeller from "../BestSeller/BestSeller";
import Clock from "../Clock/Clock";
import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Facebook from "../Facebook/Facebook";
import Orders from "../Orders/Orders";
import Sale from "../Sale/Sale";
import Search from "../Search/Search";
import Survey from "../Survey/Survey";
import Tune from "../Tune/Tune";
import Vat from "../Vat/Vat";
import Wishlist from "../Wishlist/Wishlist";
import "./Home.css";

function Home(): JSX.Element {

    usePageTitle("Home Page");
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
            <Facebook />
            <Orders />
            <DayPartIcon hour={17} />
            <br/>
            <Vat percent={19} />
        </div>
    );
}

export default Home;
