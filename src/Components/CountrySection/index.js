import './CountrySection.css'
import Country from '../Country'

export default function CountrySection({mode}){
    return <div className='country-section-wrapper'>
        <Country mode = {mode}/>
        <Country mode = {mode}/>
        <Country mode = {mode}/>
        <Country mode = {mode}/>
        <Country mode = {mode}/>
        <Country mode = {mode}/>
        <Country mode = {mode}/>
        <Country mode = {mode}/>
        <Country mode = {mode}/>
        <Country mode = {mode}/>
    </div>
}