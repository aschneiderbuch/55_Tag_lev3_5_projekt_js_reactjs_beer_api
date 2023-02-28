import { useNavigate } from "react-router-dom";

import back from "../../img/Back.png"

// sfc
const ButtonBack = () => {

let navigate = useNavigate();

    return ( 

        <img onClick={() => navigate(-1)} src={back} alt="Zurück Button" />

     );
}
 
export default ButtonBack;