import React from "react";
import './LocList.css';
import { MdLocationPin } from "react-icons/md";
const LocList = () => {

    return(
        <>
        <h2 id="gebiete">Unsere Einsatzgebiete für Winterdienst, Reinigung und Gartenpflege:</h2>
        <div className="locationDiv">
            <div className="card">
                <p><MdLocationPin className="locInd"/>Mitte</p>
                <p><MdLocationPin className="locInd"/>Pankow</p>
                <p><MdLocationPin className="locInd"/>Neukölln</p>
                <p><MdLocationPin className="locInd"/>Charlottenburg</p>
                <p><MdLocationPin className="locInd"/>Friedrichshain</p>
                <p><MdLocationPin className="locInd"/>Lichtenberg</p>
                <p><MdLocationPin className="locInd"/>Marzahn</p>
            </div>
            <div className="card">
                <p><MdLocationPin className="locInd"/>Prenzlauer Berg</p>
                <p><MdLocationPin className="locInd"/>Reinickendorf</p>
                <p><MdLocationPin className="locInd"/>Spandau</p>
                <p><MdLocationPin className="locInd"/>Steglitz</p>
                <p><MdLocationPin className="locInd"/>Tempelhof</p>
                <p><MdLocationPin className="locInd"/>Tiergarten</p>
                <p><MdLocationPin className="locInd"/>Wilmersdorf</p>
                <p><MdLocationPin className="locInd"/>Treptow</p>
            </div>
            <div className="card">
                <p><MdLocationPin className="locInd"/>Wedding</p>
                <p><MdLocationPin className="locInd"/>Weissensee</p>
                <p><MdLocationPin className="locInd"/>Hellersdorf</p>
                <p><MdLocationPin className="locInd"/>Hohenschönhausen</p>
                <p><MdLocationPin className="locInd"/>Köpenick</p>
                <p><MdLocationPin className="locInd"/>Kreuzberg</p>
                <p><MdLocationPin className="locInd"/>Schöneberg</p>
                <p><MdLocationPin className="locInd"/>Zehlendorf</p>            
            </div>
        </div>
        <hr className="line2"/>
        </>
        
    )
}

export default LocList;