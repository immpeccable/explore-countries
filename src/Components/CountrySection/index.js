import "./CountrySection.css";
import Country from "../Country";
import { Link } from "react-router-dom";

export default function CountrySection({ mode, renderArray }) {
  function mapSlicedArray() {
    let slicedArray = [];
    if (renderArray && renderArray.length > 0) {
      let max = renderArray.length;
      if (renderArray.length > 15) {
        max = 15;
      }
      slicedArray = renderArray.slice(0, max);
    }

    return slicedArray.map((el) => {
      return (
        <Link to={"/country/" + el.cca3} >
          <Country mode={mode} countryInfo={el} />
        </Link>
      );
    });
  }

  return <div className="country-section-wrapper">{mapSlicedArray()}</div>;
}
