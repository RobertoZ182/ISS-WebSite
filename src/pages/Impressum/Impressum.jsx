import React from "react";
import "./Impressum.css";
const Impressum = () => {
    return (
        <div className="impressumBody">
            <div>
                <h1 className="impressumTitle">Impressum</h1>
                <hr className="line" />
                <div className="impressCard">                
                    <h3>Angaben gemäß § 5 TMG</h3>
                    <p>I. S. S. Winterdienst UG (haftungsbeschränkt)</p>
                    <p>Potsdamer Platz 10, Haus 2 10785 Berlin</p>
                </div>

                <div className="impressCard">
                    <h3>Vertreten durch:</h3>
                    <p>Iosif-Solomon Stoica</p>
                </div>

                <div className="impressCard">
                    <h3>Kontakt</h3>
                    <p>01726766794</p>
                    <p>josifstoica60@gmail.com</p>
                </div>
                <div className="impressCard">
                    <h3>Registereintrag</h3>
                    <p>Eintragung im Handelsregister</p>
                    <p>Registergericht: Amtsgericht Charlottenburg</p>
                    <p>Registernummer: HRB 255464 B</p>
                </div>
                <div className="impressCard">
                    <h3>EU-Streitschlichtung</h3>
                    <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/.</p>
                    <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                </div>
                <div className="impressCard2">
                    <h3>Haftung für Inhalte
                    </h3>
                    <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                    <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
                </div>
            </div>
        </div>
    )
}

export default Impressum;