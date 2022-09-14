import "./App.css";
import Header from "./Components/Header";
import { selectDisplay } from "./redux/slices/displayCountrySlice";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { useSelector } from "react-redux";
import { selectLoading } from "./redux/slices/loadingSlice";
import Loading from "./Components/Loading";
function App() {
  let potentials = useSelector(selectPotentials);
  let currentDisplay = useSelector(selectDisplay);
  let isLoading = useSelector(selectLoading);
  return (
    <div className="App font-link">
     {isLoading && <Loading/>}
      <Header />
      {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
    </div>
  );
}

export default App;
