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
        let fetchUrl = "https://restcountries.com/v3.1/all";
        if(countryName!==""){
            fetchUrl = "https://restcountries.com/v3.1/name/" + countryName;
        }
      let response = await fetch(fetchUrl);

      response = await response.json();
      setCountryList([...response]);
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
      <CountrySection countryList = {countryList} mode={mode} />
    </div>
  );
};

export default MainWrapper;
