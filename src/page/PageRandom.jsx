import { useEffect } from "react";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import ButtonBack from "../component/buttonBack/ButtonBack.jsx";
import Footer from "../component/footer/Footer.jsx";
import RandomUndDetailSchablone from "../component/randomUndDetailSchablone/RandomUndDetailSchablone.jsx";






//sfc
const PageRandom = () => {



    /************************************************************************************************
     * 
     *          Fetch random beer
     *          https://ih-beers-api2.herokuapp.com/beers/random
     *  
     *************************************************************************************************/
    const [getRandomBeer, setRandomBeer] = useState();

    useEffect(() => {
        console.log(" in useEffect random beer")
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response => response.json())
            .then(data => {
                console.log(data)

                setRandomBeer(data)
            })

            .catch(error => {
                console.log(" -> error fetch random beer <- ")
                console.log(error)
            })


    }, []);

    console.log("nach fetch")
    console.log(getRandomBeer)

    return (


        <section>
 


{/* // !!! jetzt der Übergabemoment zu den props */}
{getRandomBeer && (

                <RandomUndDetailSchablone
                    key={uuidv4()} /* uuid und diese key wird für map gebraucht, sonst mosert react */
                    image_url={getRandomBeer.image_url}
                    _id={getRandomBeer._id}
                    name={getRandomBeer.name}
                    tagline={getRandomBeer.tagline}
                    first_brewed={getRandomBeer.first_brewed}
                    attenuation_level={getRandomBeer.attenuation_level}
                    contributed_by={getRandomBeer.contributed_by}
                    description={getRandomBeer.description}
                >

                </RandomUndDetailSchablone>
            )}

<ButtonBack> </ButtonBack>

   <Footer> </Footer>

        </section>
    );
}

export default PageRandom;