import { useState, useEffect } from "react";
import InputWrapper from "../InputWrapper";
import CountrySection from "../CountrySection";
import Header from "../Header";
import "./index.css";

let MainWrapper = () => {
  const [mode, setMode] = useState("dark");

  const [countryName, setCountryName] = useState("");
  const [countryList, setCountryList] = useState();

  

  useEffect(() => {
    async function fetchCountries() {
      let response = await fetch("https://restcountries.com/v3.1/all");
      response = await response.json();
      setCountryList(response);
    }
    fetchCountries();
  }, [countryName]);

  function setCountryFunction(curr){
    setCountryName(curr);
  }

  function setModeFunction(curr) {
    setMode(curr);
  }
  return (
    <div
      className={`main-wrapper ${
        mode === "white" ? "main-wrapper-white" : "main-wrapper-dark"
      }`}
    >
      <Header mode={mode} setMode={setModeFunction} />
      <InputWrapper mode={mode} setCountryName = {setCountryFunction} />
      <CountrySection mode={mode} />
    </div>
  );
};

export default MainWrapper;
