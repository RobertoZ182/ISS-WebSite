import React from "react";
import "./Winterdienst.css";
import picture1 from '../../images/iStock-1288844273 Winterdienst.jpg'
import picture2 from '../../images/iStock-1297020704 Winterdienst.jpg'
import Carousel from "../../compoments/Carousel/Carousel";
const Winterdienst = () => {
    const imgs = [{image: picture1},{image: picture2}]
    return (
        <div className="mainWinter">
            <section className="winterInfo">   
                <h1 className="leistungstitle">Winterdienst</h1>     
                <h1 className="leistungssubtitle">Mit uns sicher durch den Winter</h1>
                <hr className="line" />
                <p>Unsere Winterdienstleistungen sind auf Ihre Sicherheit und eine reibungslose Mobilität ausgerichtet. Bei I. S. S. Winterdienst UG verstehen wir die Bedeutung einer effizienten Schnee- und Eisbeseitigung. Unser engagiertes Team richtet sich flexibel nach den aktuellen Wetterbedingungen, um Ihnen einen schnellen und sicheren Winterdienst anzubieten.</p>
                <p>Die Gewährleistung der Verkehrssicherheit auf Straßen, Wegen, Einfahrten, Parkplätzen und anderen Verkehrsflächen ist für uns von höchster Priorität. Unser Winterdienst spielt eine entscheidende Rolle, um sicherzustellen, dass Sie sich problemlos fortbewegen können, selbst unter den herausforderndsten winterlichen Bedingungen.</p>
                <p>Vertrauen Sie auf unsere Expertise und Erfahrung, um eine zuverlässige Schnee- und Eisbeseitigung zu gewährleisten. Ihre Sicherheit liegt uns am Herzen, und wir setzen alles daran, die Verkehrswege für Sie frei und sicher zu halten.</p>
            </section>
            <Carousel images={imgs} />
        </div>
    )
}

export default Winterdienst;