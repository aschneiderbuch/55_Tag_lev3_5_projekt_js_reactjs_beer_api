// import Link
import { Link } from "react-router-dom"

// import useParams
// import { useParams } from "react-router-dom"

// damit man einmal zu Liste bier kommt 
// und einmal zum Random bier


// import css
import "./HomeAuswahl.scss"

//sfc
const HomeAuswahl = (props) => {
    return ( 

        <section className="sec_HomeAuswahl">



        <img src={props.img} alt={`Bild ${props.img} ${props.text}`} />
        {/* // ! ist Link */}
        <Link to={`/${props.linkZuPage}`}>  {props.buttonText}</Link>
        <p>{props.text}</p>



        </section>

     );
}
 
export default HomeAuswahl;