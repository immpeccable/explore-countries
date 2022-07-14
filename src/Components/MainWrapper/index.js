import { useState } from 'react'
import InputWrapper from '../InputWrapper';
import CountrySection from '../CountrySection';
import Header from '../Header'
import './index.css'

let MainWrapper = () =>{

    const [mode, setMode] = useState("dark");

    function setModeFunction(curr){
        setMode(curr);
    }

    return <div className={`main-wrapper ${mode === "white" ? "main-wrapper-white" : "main-wrapper-dark"}`}>
        <Header mode = {mode} setMode = {setModeFunction}/>
        <InputWrapper mode = {mode}/>
        <CountrySection/>
    </div>
}

export default MainWrapper