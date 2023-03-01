import { useNavigate } from "react-router-dom";

import back from "../../img/Back.png"

import "./ButtonBack.scss";

// sfc
const ButtonBack = () => {

    let navigate = useNavigate();

    return (
        <section className="sec_ButtonBack">
            <img onClick={() => navigate(-1)} src={back} alt="Zurück Button" />
        </section>
    );
}

export default ButtonBack;