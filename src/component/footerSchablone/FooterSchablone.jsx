

// import img
// import { Link, NavLink } from "react-router-dom";
import logo from "../../img/Logo.svg"
import { useNavigate } from "react-router-dom";

import "./FooterSchablone.scss"


// sfc
const FooterSchablone = () => {

    let navigate = useNavigate()

    return (



        <section className="sec_FooterSchablone">

            <article>
                <img onClick={() => navigate("/")} src={logo} alt="Logo Bier Button" />
            </article>
        </section>
    );
}

export default FooterSchablone