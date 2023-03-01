
import "./RandomUndDetailSchablone.scss"



//sfc
const RandomUndDetailSchablone = (props) => {


    return (

        <section className="sec_RandomUndDetailSchablone">


            <img src={props.image_url} alt="Bild von einem Bier" />
            <h1>{props.name}</h1>
            <h3>{props.tagline}</h3>
            <article>

                <ul>
                    <li>
                        <h6>First brewed: </h6>
                        <h6>{props.first_brewed}</h6>
                    </li>
                    <li>
                        <h6>Attenuation level: </h6>
                        <h6>{props.attenuation_level}</h6>
                    </li>
                </ul>
            </article>
            <p>{props.description}</p>



        </section>

    );
}

export default RandomUndDetailSchablone;