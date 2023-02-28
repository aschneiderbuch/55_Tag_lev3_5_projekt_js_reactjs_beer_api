// import Link
import { Link } from "react-router-dom"

// import useParams
// import { useParams } from "react-router-dom"

// damit man einmal zu Liste bier kommt 
// und einmal zum Random bier




//sfc
const HomeAuswahl = (props) => {
    return ( 

        <section>



        <img src={props.img} alt={`Bild ${props.img} ${props.text}`} />
        {/* // ! ist Link */}
        <Link to={`/${props.linkZuPage}`}>  {props.buttonText}</Link>
        <p>{props.text}</p>



        </section>

     );
}
 
export default HomeAuswahl;