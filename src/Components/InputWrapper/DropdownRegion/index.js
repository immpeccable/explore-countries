import { useState } from "react";
import "./Dropdown.css";

import whiteIcon from "../../images/down-arrow (1).png";
import blackIcon from "../../images/down-arrow.png";

export default function DropdownRegion({ mode, setRenderArray }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="root-dropdown-wrapper">
      <button
        className={`dropdown-open ${
          mode === "white" ? "dropdown-open-white" : "dropdown-open-dark"
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div>Filter by Region</div>
        <img src={mode === "dark" ? whiteIcon : blackIcon} alt="error"></img>
      </button>
      <div
        className={`dropdown-item-wrapper ${isOpen ? "" : "not-visible"} ${
          mode === "white" ? "white" : "dark"
        }`}
      >
        <div onClick={(e) => { setRenderArray(e.target.textContent)}} className="dropdown-item">All</div>
        <div onClick={(e) => { setRenderArray(e.target.textContent)}} className="dropdown-item">Africa</div>
        <div onClick={(e) => { setRenderArray(e.target.textContent)}} className="dropdown-item">Americas</div>
        <div onClick={(e) => { setRenderArray(e.target.textContent)}} className="dropdown-item">Asia</div>
        <div onClick={(e) => { setRenderArray(e.target.textContent)}} className="dropdown-item">Europe</div>
        <div onClick={(e) => { setRenderArray(e.target.textContent)}} className="dropdown-item">Oceania</div>
      </div>
    </div>
  );
}
