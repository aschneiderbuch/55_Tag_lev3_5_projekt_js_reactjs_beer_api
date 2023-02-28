import HomeAuswahl from "../component/homeAuswahl/HomeAuswahl.jsx";

// import useEffect
import { useEffect } from "react";

// import useState
import { useState } from "react";

// import von data 
import dataBackup from "../data/Data.jsx";


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
        fetch (`http://ih-beers-api2.herokuapp.com/beers`)
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
            <h1>PageListe</h1>

            {/* // ! hier kommt der .map */}

            <h2>hier jetzt homeAuswahlSchablone rein</h2>



        </section>

    );
}

export default PageListe;





