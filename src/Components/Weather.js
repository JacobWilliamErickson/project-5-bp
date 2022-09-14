import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
import {setFalse,setTrue} from "../redux/slices/loadingSlice"
const Weather = () => {
  const [weather, setWeather] = useState();
  let display = useSelector(selectDisplay);
  let lat = display.capitalInfo.latlng[0];
  let long = display.capitalInfo.latlng[1];
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTrue())
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: `${lat}, ${long}` },
      headers: {
        "X-RapidAPI-Key": "da02c4ee8emsh08edafca855ff6ap1cba0ajsn2f79d32849e0",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        dispatch(setFalse())
        setWeather(response.data);
      })
      .catch(function (error) {
        console.error(error);
        dispatch(setFalse())
      });
  }, []);
  return (
    <div>
      <table className="overview-table">
        <tbody>
          <tr>
            <td>Conditions: </td>
            <td>{weather?.current?.condition?.text}</td>
          </tr>
          <tr>
            <td>Temperature: </td>
            <td> {weather?.current?.temp_f}</td>
          </tr>
          <tr>
            <td>Feels Like: </td>
            <td> {weather?.current?.feelslike_f}</td>
          </tr>
          <tr>
            <td>Humidity: </td>
            <td> {weather?.current?.humidity}</td>
          </tr>
          <tr>
            <td>Wind Speed: </td>
            <td>
              {" "}
              {weather?.current?.wind_mph} mph {weather?.current?.wind_dir}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Weather;
