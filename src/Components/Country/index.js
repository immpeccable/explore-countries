import "./Country.css";

export default function Country({mode, countryInfo}) {
  return (
    <div className={`country-wrapper ${mode === "white" ? "country-wrapper-light" : "country-wrapper-dark"}`}>
      <img className="country-flag" src={countryInfo.flags.png} alt="error" />
      <div className="country-name">{countryInfo.name.official}</div>
      <div className="country-info">
        <div className="mid-text">Population: <span className="light-text">{countryInfo.population} </span> </div>
        <div className="mid-text">Region: <span className="light-text"> {countryInfo.region}</span></div>
        <div className="mid-text">Capital: <span className="light-text">{countryInfo.capital} </span></div>
      </div>
    </div>
  );
}
