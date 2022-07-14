import { useState } from 'react'
import ContentWrapper from '../ContentWrapper';
import Header from '../Header'
import './index.css'

let MainWrapper = () =>{

    const [mode, setMode] = useState("white");

    function setModeFunction(curr){
        setMode(curr);
    }

    return <div className={`main-wrapper ${mode === "white" ? "main-wrapper-white" : "main-wrapper-dark"}`}>
        <Header mode = {mode} setMode = {setModeFunction}/>
        <ContentWrapper mode = {mode}/>
    </div>
}

export default MainWrapper