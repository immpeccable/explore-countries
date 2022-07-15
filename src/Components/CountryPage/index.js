import { Link, useParams } from "react-router-dom";
import "./CountryPage.css";
import whiteLeftArrow from "../images/left-arrow (1).png";
import darkLeftArray from "../images/left-arrow.png";
import { useEffect, useState } from "react";

export default function CountryPage({ mode }) {
  const { code } = useParams();
  const [countryInfo, setCountryInfo] = useState();

  useEffect(() => {
    let isSubscribed = true;

    fetchCountry();

    async function fetchCountry() {
      let fetchUrl = "https://restcountries.com/v2/alpha/" + code;
      let response = await fetch(fetchUrl);
      response = await response.json();
      console.log(response);
      if (isSubscribed) {
        setCountryInfo(response);
      }
    }

    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <div className={`country-page-content-wrapper ${mode === "white" ? "country-page-content-wrapper-white": "country-page-content-wrapper-dark"}`}>
      <Link to={"/"}>
        <button
          className={`back-wrapper ${
            mode === "white" ? "back-wrapper-white" : "back-wrapper-dark"
          }`}
        >
          <img
            className="back-img"
            src={mode === "white" ? darkLeftArray : whiteLeftArrow}
            alt="error"
          />
          <div>Back</div>
        </button>
      </Link>
      <div className="country-content-wrapper">
        <img
          className="country-page-img"
          src={countryInfo ? countryInfo.flags.png : null}
          alt="error"
        />
        <div className="country-page-detail">
          <div className="country-page-name">
            {countryInfo ? countryInfo.name : ""}
          </div>
          <div className={`country-page-info-wrapper`}>
            <div className="info-left">
              <div className="key-value">
                <div className="key">Native Name:</div>
                <div className="value">{countryInfo ? countryInfo.nativeName: ""}</div>
              </div>
              <div className="key-value">
                <div className="key">Population:</div>
                <div className="value">{countryInfo ? countryInfo.population: ""}</div>
              </div>
              <div className="key-value">
                <div className="key">Region:</div>
                <div className="value">{countryInfo ? countryInfo.region: ""}</div>
              </div>
              <div className="key-value">
                <div className="key">Sub Region:</div>
                <div className="value">{countryInfo ? countryInfo.subregion: ""}</div>
              </div>
              <div className="key-value">
                <div className="key">Capital:</div>
                <div className="value">{countryInfo ? countryInfo.capital: ""}</div>
              </div>
            </div>
            <div className="info-right">
              <div className="key-value">
                <div className="key">Top Level Domain:</div>
                <div className="value">{countryInfo ? countryInfo.topLevelDomain: ""}</div>
              </div>
              <div className="key-value">
                <div className="key">Currencies:</div>
                <div className="value">{countryInfo ? countryInfo.currencies[0].name : ""}</div>
              </div>
              <div className="key-value">
                <div className="key">Languages:</div>
                <div className="value">{countryInfo ? countryInfo.languages[0].name : ""}</div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
