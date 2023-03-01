import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

// import uuid
import { v4 as uuidv4 } from "uuid";

// import css
import RandomUndDetailSchablone from "../component/randomUndDetailSchablone/RandomUndDetailSchablone.jsx";
import Footer from "../component/footer/Footer.jsx";
import ButtonBack from "../component/buttonBack/ButtonBack.jsx";




// sfc
const Einzelseite = (props) => {

    const params = useParams();
    console.log(params)
    
    const beerId = params._id
    console.log(beerId)

    const [getData, setData] = useState({});


    /************************************************************************************************
     * 
     *                           Fetch   anhand der id
     *                       https://ih-beers-api2.herokuapp.com/beers/5fb6a86265b9c209606e10e0
     * 
     *************************************************************************************************/
useEffect(() => {
    console.log("in useEffect vor fetchBierId")
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        setData(data)
    })

    .catch(error =>{
        console.log(" -> error fetch beerId <- ")
        console.log(error)
    })

}, [beerId]);

console.log(getData)

    return ( 

        <section>


{/* // !!! jetzt der Übergabemoment zu den props */}
 {getData && (

<RandomUndDetailSchablone
    key={uuidv4()}
    image_url={getData.image_url}
    _id={getData._id}
    name={getData.name}
    tagline={getData.tagline}
    first_brewed={getData.first_brewed}
    attenuation_level={getData.attenuation_level}
    contributed_by={getData.contributed_by}
    description={getData.description}

    >
    
    </RandomUndDetailSchablone>
)} 

<ButtonBack> </ButtonBack>

<Footer> </Footer>

        </section>

     );
}
 
export default Einzelseite;