

// import img
// import { Link, NavLink } from "react-router-dom";
import logo from "../../img/Logo.svg"
import { useNavigate } from "react-router-dom";



// sfc
const FooterSchablone = () => {

let navigate = useNavigate()

    return ( 



        <section>

                        <img onClick={() => navigate(-1)} src={logo} alt="Logo Bier Button" />

        </section>
     );
}
 
export default FooterSchablone