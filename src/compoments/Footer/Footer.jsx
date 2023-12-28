import React from "react";
import "./Footer.css";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import {Link} from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footerWrapper">
                <div className="footerCard">
                    <h3>I.S.S. Winterdienst UG (Haftungsbeschränkt)</h3>
                    <p>Wir sind stolz darauf, individuelle Lösungen für unsere Kunden zu finden und sie zufrieden zu stellen.</p>
                </div>
                <div className="footerCard second">
                    <h3>Kontakt</h3>
                    <div><FaLocationDot className="footicon"/><p>Potsdamer Platz 10, Haus 2
                        10785 Berlin</p></div>
                    <div><FaPhone className="footicon"/><p>01726766794</p></div>
                    <div><MdEmail className="footicon"/><p>josifstoica60@gmail.com</p></div>
                </div>
                <div className="footerCard">
                    <h3>Links</h3>
                    <Link to="/impressum" className="impr"><p>Impressum</p></Link>
                </div>
            </div>
            <hr />
            <p className="rechte">© 2023 I.S.S. Winterdienst UG (Haftungsbeschränkt). Alle Rechte vorbehalten. </p>
        </div>
    )
}

export default Footer;