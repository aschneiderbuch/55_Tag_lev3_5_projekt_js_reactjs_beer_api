import { Link } from "react-router-dom";

// import useParams
// import { useParams } from "react-router-dom";

// import css
import "./HomeAuswahlSchablone.scss";

// sfc
const HomeAuswahlSchablone = (props) => {
    return (


        <section className="sec_HomeAuswahlSchablone" id={props._id}>
            <article>
                <h1>Schablone</h1>

                <img src={props.image_url} alt= {`Bild von einem Bier`} />
            </article>

            <article>
                <h2>{props.name}</h2>
                <h3>{props.tagline}</h3>  {/* // * color gelb */}
                <p>Created by: {props.name}</p>
                <button> <Link exact to={`/Einzelseite/${props._id}` } > Details </Link> </button>
                {/* in link   useParams  rein */}
            </article>

        </section>


    );
}

export default HomeAuswahlSchablone;