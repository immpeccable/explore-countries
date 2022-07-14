import './CountrySection.css'
import Country from '../Country'
import { useState } from 'react';

export default function CountrySection({mode, countryList}){


    function mapSlicedArray(){

        let slicedArray = [];
        if(countryList && countryList.length > 0){
            let max = countryList.length;
            if(countryList.length > 15){
                max = 15;
            }
            slicedArray = countryList.slice(0, max);
            console.log(slicedArray);
        }

        return slicedArray.map((el) => {
            return <Country mode = {mode} countryInfo = {el}/>
        })        
    }

    return <div className='country-section-wrapper'>
        {mapSlicedArray()}
    </div>
}