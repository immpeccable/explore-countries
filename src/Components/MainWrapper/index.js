import { useState, useEffect } from "react";
import InputWrapper from "../InputWrapper";
import CountrySection from "../CountrySection";
import Header from "../Header";
import "./index.css";

let MainWrapper = () => {

  const [mode, setMode] = useState("dark");
  const [countryName, setCountryName] = useState("");
  const [countryList, setCountryList] = useState();
  const [renderArray, setRenderArray] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
        let fetchUrl = "https://restcountries.com/v3.1/all";
        if(countryName!==""){
            fetchUrl = "https://restcountries.com/v3.1/name/" + countryName;
        }
      let response = await fetch(fetchUrl);

      response = await response.json();
      setCountryList([...response]);
      setRenderArray([...response])
    }
    fetchCountries();
  }, [countryName]);

  function setCountryFunction(curr){
    setCountryName(curr);
  }

  function setModeFunction(curr) {
    setMode(curr);
  }
  function setRenderArrayFunction(filter){
    if(countryList && filter === "All"){
        setRenderArray([...countryList]);
        return;
    }
    if(countryList){
        setRenderArray(countryList.filter((el) => {
            return el.region === filter;
        }))
    }
  }
  
  return (
    <div
      className={`main-wrapper ${
        mode === "white" ? "main-wrapper-white" : "main-wrapper-dark"
      }`}
    >
      <Header mode={mode} setMode={setModeFunction} />
      <InputWrapper setRenderArray = {setRenderArrayFunction} mode={mode} setCountryName = {setCountryFunction} />
      <CountrySection mode={mode} renderArray = {renderArray} />
    </div>
  );
};

export default MainWrapper;
