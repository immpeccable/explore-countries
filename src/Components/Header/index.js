import "./index.css";
import NightMode from "../images/night-mode (1).png";
import LightMode from "../images/sleep-mode.png";

let Header = ({ mode, setMode }) => {

  function changeMode(){

    setMode(mode === "white" ? "dark" : "white");
    if(mode === "white"){
      document.body.style.backgroundColor = "#202D36";
    }else{
      document.body.style.backgroundColor = "#FAFAFA";
    }

  }

  return (
    <div
      className={`header ${mode === "white" ? "header-white" : "header-dark"}`}
    >
      <div className="header-left-side">Where in the world?</div>
      <div onClick={() => {
            changeMode();
          }} className="header-right-side">
          <img className="switch-img" src= {mode === "white" ? LightMode : NightMode} alt = "error"/>
        
        <div className="header-right-descr">
            {mode === "white" ? "Dark Mode" : "Light Mode"}
        </div>
      </div>
    </div>
  );
};
export default Header;
