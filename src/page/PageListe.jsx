// import HomeAuswahl from "../component/homeAuswahl/HomeAuswahl.jsx";

// import useEffect
import { useEffect } from "react";

// import useState
import { useState } from "react";

// import von data 
import dataBackup from "../data/Data.jsx";
import HomeAuswahlSchablone from "../component/homeAuswahlSchablone/HomeAuswahlSchablone.jsx";

// import uuid
import { v4 as uuidv4 } from "uuid";
import Footer from "../component/footer/Footer.jsx";
// import RandomUndDetailSchablone from "../component/randomUndDetailSchablone/RandomUndDetailSchablone.jsx";

// sfc
const PageListe = () => {

    /************************************************************************************************
     * 
     * Fetch 1    Bier Liste
     *      - dafür brauchen wir useEffect, damit es nicht ständig neu rendert  
     *      - dafür brauchen wir useState, damit wir die Ergebnisse speichern und übergeben können
     *      - https://ih-beers-api2.herokuapp.com/beers
     *               - evtl direkt zu bier mit bierID      https://ih-beers-api2.herokuapp.com/beers/5fb6a86265b9c209606e10e0
     * 
     *      - fetch 2    zufalls Bier    https://ih-beers-api2.herokuapp.com/beers/random
     * 
     *************************************************************************************************/
    const [getBeer, setBeer] = useState(dataBackup);

    useEffect(() => {
        console.log("in useEffect");
        fetch(`http://ih-beers-api2.herokuapp.com/beers`)
            .then(response => response.json())
            .then(data => {
                console.log(data)

                setBeer(data)
            })

            .catch(error => {
                console.log(" -> error <- ")
                console.log(error)
            })





        // ! Ende useEffect
    }, []);

    console.log(getBeer)

    return (

        <section>

            {/* // ! hier kommt der .map */}
            {/* getBeer && getBeer.map wird gebraucht, 
            um das Problem mit dem asyncronen fetch 
            und fehlenden daten zu umgehen  */}
            {getBeer && getBeer.map((i, index) => {

                return <HomeAuswahlSchablone
                    key={uuidv4()} /* uuid und diese key wird für map gebraucht, sonst mosert react */
                    image_url={i.image_url}
                    _id={i._id}
                    name={i.name}
                    tagline={i.tagline}
                    first_brewed={i.first_brewed}
                    attenuation_level={i.attenuation_level}
                    contributed_by={i.contributed_by}
                    description={i.description}

                >
                </HomeAuswahlSchablone>
            })}
    

<Footer></Footer>




        </section>

    );
}

export default PageListe;





