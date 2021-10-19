import React from "react";
import './Button.css'

function Button(props) {

    function onclick() {
        console.log(props.acao)
    }

    return (
        <button className={props.type} onClick={onclick}>
            {props.text}
        </button>
    )

    
}

export default Button