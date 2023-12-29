import React from "react";
import "./Reinigung.css";
import picture1 from '../../images/iStock-949219872 Reinigung.jpg'
import picture2 from '../../images/Reinigung.jpg';
import Carousel from '../../compoments/Carousel/Carousel.jsx';
const Reinigung = () => {
    const imgs = [{image: picture1},{image: picture2}]
    return (
        <div className="reinMain">
            <section className="reinInfo">
                <h1 className="leistungstitle">Reinigung</h1>
                <h1 className="leistungssubtitle">Ihr zuverlässiger Partner für professionelle Reinigungsdienstleistungen!</h1>
                <hr className="line" />
                <p>Egal, ob es um die Reinigung von Büros, Geschäftsräumen, Wohnungen, Häusern oder anderen Objekten geht – unsere erfahrenen Fachleute verfügen über das notwendige Know-how, um die individuellen Anforderungen unserer Kunden zu erfüllen.</p>
                <p>Unser breites Spektrum an Reinigungsdiensten umfasst nicht nur die Standardreinigung, sondern auch spezielle Dienstleistungen, die auf Ihre besonderen Bedürfnisse zugeschnitten sind. Wir verstehen, dass jeder Kunde einzigartig ist und unterschiedliche Ansprüche an die Reinigung stellt. Daher bieten wir maßgeschneiderte Lösungen an, um sicherzustellen, dass Ihre Räumlichkeiten stets makellos sauber sind.</p>
                <p>Egal, welche Art von Reinigungsdienst Sie benötigen, wir sind hier, um Ihnen zu helfen. Unser Team steht Ihnen zur Verfügung, um alle Ihre Fragen zu beantworten und gemeinsam mit Ihnen die optimale Reinigungslösung für Ihre Anforderungen zu finden. Setzen Sie sich einfach mit uns in Verbindung, und lassen Sie uns dafür sorgen, dass Ihre Räume immer in bestem Zustand sind!</p>
                <p>Unser Unternehmen bietet folgende Reinigungsdienstleistungen an:</p>
                <ul>
                    <li>Unterhaltsreinigung</li>
                    <li>Grundreinigung</li>
                    <li>Schulreinigung</li>
                    <li>Kindergartenreinigung</li>
                    <li>Fensterreinigung</li>
                    <li>Glasreinigung</li>
                    <li>Hotelreinigung</li>
                    <li>Arztpraxisreinigung</li>
                    <li>Fitnessstudio-Reinigung</li>
                    <li>Büroreinigung</li>
                    <li>Kanzleireinigung</li>
                    <li>Treppenhausreinigung.</li>
                </ul>
            </section>
            <Carousel images={imgs} />
        </div>
    )
}

export default Reinigung;