import { configureStore } from "@reduxjs/toolkit";
import potentialCountriesReducer from "./slices/potentialCountriesSlice";
import displayedCountryReducer from "../redux/slices/displayCountrySlice"
import loadingSliceReducer from "../redux/slices/loadingSlice"
export default configureStore({
    reducer:{
        potentialCountries: potentialCountriesReducer,
        displayedCountry: displayedCountryReducer,
        isLoading: loadingSliceReducer,
    },
})