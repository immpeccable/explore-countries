import { useState, useEffect } from "react";
import "./InputWrapper.css";
import DropdownRegion from "./DropdownRegion";
import whiteModeSearch from "../images/search-interface-symbol.png";
import darkModeSearch from "../images/search-interface-symbol (1).png";

export default function InputWrapper({ mode }) {
  const [countryName, setCountryName] = useState("");
  const [counryList, setCountryList] = useState();

  useEffect(() => {
    async function fetchCountries() {
      let response = fetch();
    }
    fetchCountries();
  }, [countryName]);

  return (
    <div className="input-wrapper">
      <div
        className={`input-search-wrapper ${
          mode === "white"
            ? "input-search-wrapper-white"
            : "input-search-wrapper-dark"
        }`}
      >
        <img
          className="search-img"
          src={mode === "white" ? whiteModeSearch : darkModeSearch}
          alt="error"
        />
        <input
          className={`country-name ${
            mode === "white" ? "country-name-white" : "country-name-dark"
          }`}
          onChange={(e) => {
            setCountryName(e.target.value);
          }}
          placeholder="Search for a country..."
        ></input>
      </div>
      <DropdownRegion mode={mode} />
    </div>
  );
}
