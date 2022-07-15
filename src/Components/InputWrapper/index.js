import "./InputWrapper.css";
import DropdownRegion from "./DropdownRegion";
import whiteModeSearch from "../images/search-interface-symbol.png";
import darkModeSearch from "../images/search-interface-symbol (1).png";

export default function InputWrapper({ mode, setCountryName, setRenderArray }) {

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
            console.log(e.target.value);
          }}
          placeholder="Search for a country..."
        ></input>
      </div>
      <DropdownRegion setRenderArray = {setRenderArray} mode={mode} />
    </div>
  );
}
