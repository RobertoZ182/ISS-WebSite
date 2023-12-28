import React from "react";
import "./Kontakt.css";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const Kontakt = () => {
    return (
        <div className="kontaktpage">
            <h1 className="kontaktTitle">Kontakt</h1>
            <hr className="line" />
            <div className="kontaktWrapper">
                <div className="kontaktData">
                    <div><FaLocationDot className="indic" /><p>Potsdamer Platz 10, Haus 2
                        10785 Berlin</p></div>
                    <div><FaPhone className="indic" /><p>01726766794</p></div>
                    <div><MdEmail className="indic" /><p>josifstoica60@gmail.com</p></div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.393502582582!2d13.376999200000004!3d52.50821740000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbfe2fea9f%3A0x453d8d73cc77acf9!2sPotsdamer%20Platz%2010%2FHaus%202%2C%2010785%20Berlin!5e0!3m2!1sde!2sde!4v1703699837826!5m2!1sde!2sde" title="Our location"width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <hr className="line" />
            <section className="smalltext">
                <p>Wir freuen uns über Ihr Interesse an unseren Produkten/Dienstleistungen. Um sicherzustellen, dass wir Ihre Anforderungen bestmöglich erfüllen können, laden wir Sie herzlich ein, mit uns in Kontakt zu treten.</p>
                <p>Unser engagiertes Team steht Ihnen zur Verfügung, um Ihre Fragen zu beantworten und ein individuelles Angebot für Sie zu erstellen. Wir legen großen Wert darauf, die Bedürfnisse unserer Kunden genau zu verstehen, um maßgeschneiderte Lösungen anzubieten, die perfekt zu Ihren Anforderungen passen.</p>
            </section>
            <section className="smalltext">
                <p>
                    Zögern Sie nicht, uns zu kontaktieren, sei es für weitere Informationen, spezifische Anfragen oder um Ihr persönliches Angebot zu besprechen. Wir sind hier, um Ihnen zu helfen und freuen uns darauf, von Ihnen zu hören.
                </p>
                <p>
                    Vielen Dank für Ihr Vertrauen in unser Unternehmen. Wir sind bestrebt, Ihnen einen erstklassigen Service zu bieten und Ihre Erwartungen zu übertreffen.</p>
            </section>
        </div>)
}

export default Kontakt;