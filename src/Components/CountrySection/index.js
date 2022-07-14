import './CountrySection.css'
import Country from '../Country'

export default function CountrySection({mode, renderArray}){

    function mapSlicedArray(){

        let slicedArray = [];
        if(renderArray && renderArray.length > 0){
            let max = renderArray.length;
            if(renderArray.length > 15){
                max = 15;
            }
            slicedArray = renderArray.slice(0, max);
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