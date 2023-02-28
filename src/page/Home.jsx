import HomeAuswahl from "../component/homeAuswahl/HomeAuswahl";

import bild_0_bierRegal from "../img/bild_0_bierRegal.png";
import bild_1_bierTresen from "../img/bild_1_bierTresen.png";

const buttonText = ["All Beers", "Random Beer"];
const text = ["lorem Lulll uudkk  ipsum dolor sit amet", "Tom tomddddddddddddddddddddddddddddd tom lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"];
const linkZuPage = ["PageListe", "PageRandom"];

// sfc
const Home = () => {
    return ( 


        <section>
{/* erstes Feld */}
            <HomeAuswahl
            img={bild_0_bierRegal}
            buttonText={buttonText[0]}
            text={text[0]}
            linkZuPage={linkZuPage[0]}
            
            ></HomeAuswahl>


{/* zweites Feld */}
            <HomeAuswahl
            img={bild_1_bierTresen}
            buttonText={buttonText[1]}
            text={text[1]}
            linkZuPage={linkZuPage[1]}

            ></HomeAuswahl>



        </section>

     );
}
 
export default Home;