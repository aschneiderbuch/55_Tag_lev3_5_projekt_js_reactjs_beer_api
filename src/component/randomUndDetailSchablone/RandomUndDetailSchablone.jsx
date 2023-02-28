
import "./RandomUndDetailSchablone.scss"



//sfc
const RandomUndDetailSchablone = (props) => {


    return ( 

<section>

<img src={props.image_url} alt="Bild von einem Bier" />
        <h1>{props.name}</h1>
        <h3>{props.tagline}</h3>
        <h6>{props.first_brewed}</h6>
        <h6>{props.attenuation_level}</h6>
        <p>{props.description}</p>



</section>

     );
}
 
export default RandomUndDetailSchablone;