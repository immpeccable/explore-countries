import { useState, useEffect } from "react";
import InputWrapper from "../InputWrapper";
import CountrySection from "../CountrySection";
import "./index.css";

let MainWrapper = ({mode, setMode}) => {

  
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
      <InputWrapper setRenderArray = {setRenderArrayFunction} mode={mode} setCountryName = {setCountryFunction} />
      <CountrySection mode={mode} renderArray = {renderArray} />
    </div>
  );
};

export default MainWrapper;
