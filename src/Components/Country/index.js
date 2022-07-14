import "./Country.css";
import TurkeyFlag from "../images/Screen Shot 2022-07-14 at 18.59.38.png";

export default function Country({mode}) {
  return (
    <div className={`country-wrapper ${mode === "white" ? "country-wrapper-light" : "country-wrapper-dark"}`}>
      <img className="country-flag" src={TurkeyFlag} alt="error" />
      <div className="country-name">Turkey</div>
      <div className="country-info">
        <div className="mid-text">Population: <span className="light-text">  81,770,990</span> </div>
        <div className="mid-text">Region: <span className="light-text">  Europe</span></div>
        <div className="mid-text">Capital: <span className="light-text">  Berlin</span></div>
      </div>
    </div>
  );
}
