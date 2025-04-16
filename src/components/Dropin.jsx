
import React, {useState} from "react";
import ArrowUp from "../assets/Arrow-up.svg"
const Dropin= ({title, children}) => {
    return(
        <details>
            <summary>{title} 
                <img src={ArrowUp} alt="image flèche" className="Arrow"></img>
            </summary>
            <p className="dropinText">{children}</p>
        </details>
    );
}
export default Dropin;