import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function BackButton(){
    const navigate= useNavigate();

    return(
        <button className="back-button" onClick={()=>navigate(-1)}>
            <FiArrowLeft/>
            <span>Back</span>
        </button>
    )
}

export default BackButton;