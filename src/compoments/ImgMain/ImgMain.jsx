import React from "react";
import "./ImgMain.css";
import image from "../../images/iStock-1297091607 Winterdienst.jpg"
const ImgMain = () => {
    return (
        <div className="imgContainer">
            <img src={image} className="mainImg" alt="mainimg" />
            <h1 className="title">I.S.S. Winterdienst UG</h1>
            <p className="undertitle">Herzlich willkommen bei I. S. S. Winterdienst UG – Ihr zuverlässiger Partner für erstklassigen Winterdienst, professionelle Reinigung und leidenschaftliche Gartenpflege!</p>
        </div>
    )
}

export default ImgMain;