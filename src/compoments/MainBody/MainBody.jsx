import React from "react";
import "./MainBody.css"

function MainBody() {
    return (
        <>
            <hr className="line"/>
            <section className="smalltext">
                <p>Unsere Leistungen sind vielfältig und werden von einem engagierten Team aus erfahrenen Fachleuten durchgeführt, die sich auf die individuellen Anforderungen unseres Unternehmens spezialisiert haben.</p>
                <p>Vertrauen Sie auf die Kompetenz unseres Teams und erleben Sie erstklassigen Service in den Bereichen Winterdienst, Reinigung und Gartenpflege. Wir freuen uns darauf, Ihre Erwartungen zu übertreffen und Ihnen den bestmöglichen Support zu bieten. Kontaktieren Sie uns noch heute für ein persönliches Gespräch und lassen Sie uns gemeinsam die optimale Lösung für Ihre Bedürfnisse finden.</p>
            </section>
            <hr className="line"/>
            <div className="wrapper">
                <div className="flexCard">
                    <h2>Winterdienst</h2>
                    <p>Unser Winterdienst richtet sich flexibel nach den Wetterbedingungen, um Ihnen stets den bestmöglichen Service zu bieten. Wir sind frühzeitig vor Ort, um sicherzustellen, dass Ihre Wege und Flächen rechtzeitig und effizient von Schnee und Eis befreit werden.</p>
                </div>
                <div className="flexCard">
                    <h2>Reinigung</h2>
                    <p>Unsere Reinigungsdienste zeichnen sich durch Gründlichkeit und Professionalität aus. Wir gehen auf die spezifischen Wünsche unserer Partner ein und gewährleisten, dass jeder Reinigungsauftrag nach höchsten Standards ausgeführt wird. Ihr Zufriedenheit steht bei uns an erster Stelle.</p>
                </div>
                <div className="flexCard">
                    <h2>Gartenpflege</h2>
                    <p>Unsere Gartenexperten setzen ihre Fachkenntnisse mit Leidenschaft ein, um Ihren Garten in voller Blüte erstrahlen zu lassen. Von der Rasenpflege über Hecken- und Baumpflege bis zur Gestaltung von Außenanlagen – wir kümmern uns um Ihr grünes Paradies mit Hingabe und Expertise.</p>
                </div>
            </div>
            <section className="smalltext2">
                <p> Zögern Sie nicht und rufen Sie uns noch heute an! Bei I. S. S. Winterdienst UG stehen wir Ihnen zur Verfügung, um auf Ihre Bedürfnisse einzugehen und Ihnen bei Winterdienst, Reinigung und Gartenpflege professionell zur Seite zu stehen. Wir sind bereit, Ihre Anrufe entgegenzunehmen und gemeinsam mit Ihnen zu besprechen, wie wir Ihren individuellen Wünschen gerecht werden können. Lassen Sie uns zusammenarbeiten, um die optimale Lösung für Ihre Anforderungen zu finden. Wir freuen uns darauf, von Ihnen zu hören!</p>
            </section>
            <hr className="line2"/>
        </>
    )
}

export default MainBody;