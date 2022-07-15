import { Link, useParams } from "react-router-dom";
import "./CountryPage.css";
import whiteLeftArrow from '../images/left-arrow (1).png';
import darkLeftArray from '../images/left-arrow.png';
import { useEffect, useState } from "react";

export default function CountryPage({mode}) {
  const { code } = useParams();
  const [countryInfo, setCountryInfo] = useState();

  async function fetchCountry(){
    let fetchUrl = "https://restcountries.com/v2/alpha/" + code;
    let response = await fetch(fetchUrl);
    response = await response.json();
    setCountryInfo(response)
    
}

fetchCountry();

  return (
    <div className="country-page-content-wrapper">
      <Link to={"/"}>
        
        <button className={`back-wrapper ${mode === "white" ? "back-wrapper-white" : "back-wrapper-dark"}`}>
            <img className="back-img" src = {mode === "white" ? darkLeftArray : whiteLeftArrow} alt="error"/>
            <div>Back</div>
        </button>
      </Link>
      <div className="country-content-wrapper">
        <img src={countryInfo ? countryInfo.flags.png : null} alt = "error"/>
      </div>
    </div>
  );
}
