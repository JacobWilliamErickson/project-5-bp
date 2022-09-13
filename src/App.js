import "./App.css";
import Header from "./Components/Header";
import {selectDisplay} from "./redux/slices/displayCountrySlice"
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import {selectPotentials} from "./redux/slices/potentialCountriesSlice";
import {useSelector} from "react-redux";
function App() {
    let potentials = useSelector(selectPotentials)
    console.log(potentials)
    let currentDisplay = useSelector(selectDisplay);
    console.log("DISPLAY", currentDisplay)
    return (
        <div className="App font-link">
            <Header />
           {currentDisplay? <MainDisplay/>:  <OptionDisplay/>} 
        </div>
    );
}

export default App;
