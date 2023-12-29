import React from "react";
import "./GartenPflege.css";
import picture1 from '../../images/iStock-926167004 Gartenpflege.jpg'
import picture2 from '../../images/iStock-1360846829 Gartenpflege.jpg'
import Carousel from "../../compoments/Carousel/Carousel";
const GartenPflege = () => {
    const imgs = [{image: picture1},{image: picture2}]
    return (
        <div className="mainGarten">
            <section className="gartenInfo">
                <h1 className="leistungstitle">Gartenpflege</h1>
                <h1 className="leistungssubtitle">Ihr Garten. Unsere Leidenschaft.</h1>
                <hr className="line"/>
                <p>Willkommen bei I. S. S. Winterdienst UG im Bereich Gartenpflege – wo unsere Experten mit Hingabe und Fachkenntnissen Ihre grünen Oasen in wahre Wohlfühloasen verwandeln. Wir bieten maßgeschneiderte Gartenpflege in Berlin für jede Art von Garten, sei es ein kleiner Rückzugsort oder eine großflächige Anlage. Unser Ziel ist es, dass Sie Ihren Garten in vollen Zügen genießen können.</p>

                <p>Unsere umfassende Gartenpflege für Privatkunden und Gewerbetreibende umfasst folgende Leistungen:</p>
                <ul>
                    <li>Rasenpflege: Wir kümmern uns um einen gepflegten und gesunden Rasen, damit er zu einem grünen Teppich in Ihrem Garten wird.</li>
                    <li>Hecken- und Baumschnitt: Für eine ordentliche Struktur und gesundes Wachstum Ihrer Hecken und Bäume.</li>
                    <li>Blumenbeete: Wir gestalten und pflegen Blumenbeete nach Ihren Vorstellungen, damit bunte Blütenpracht Ihren Garten schmückt.</li>
                    <li>Unkrautbeseitigung: Damit Ihr Garten frei von störendem Unkraut bleibt und die Pflanzen optimal gedeihen können.</li>
                    <li>Düngung und Bewässerung: Wir sorgen dafür, dass Ihre Pflanzen die benötigte Nährstoffversorgung erhalten und optimal bewässert werden.</li>
                    <li>Entsorgung von Gartenabfällen: Wir kümmern uns um die umweltgerechte Entsorgung von Gartenabfällen, damit Ihr Garten stets ordentlich bleibt.</li>
                </ul>
                <p>Mit unserer langjährigen Erfahrung bringen wir nicht nur Pflanzen, sondern auch Ihren Garten zum Strahlen. Vertrauen Sie auf unsere Gartenexperten, um Ihren grünen Raum in eine Oase der Entspannung und Schönheit zu verwandeln. Kontaktieren Sie uns, um gemeinsam die perfekte Pflegelösung für Ihren Garten zu finden.</p>
            </section>
            <Carousel images={imgs} />
        </div>
    )
}

export default GartenPflege;