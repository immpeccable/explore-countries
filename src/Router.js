import { Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import MainWrapper from "./Components/MainWrapper";
import CountryPage from "./Components/CountryPage";
import "./Router.css";
import {  useState } from "react";

export default function AppRouter() {
  const [mode, setMode] = useState("dark");

  function setModeFunc(curr) {
    setMode(curr);
  }
  return (
    <div className="top-wrapper">
      <Header mode={mode} setMode={setModeFunc} />
      <Routes>
        <Route
          path="country/:code"
          element={<CountryPage mode={mode}></CountryPage>}
        ></Route>
        <Route
          exact path="/"
          element={<MainWrapper mode={mode} setMode={setModeFunc} />}
        ></Route>
      </Routes>
    </div>
  );
}
