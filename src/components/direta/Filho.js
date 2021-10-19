import React from 'react'

function Filho(props) {

    return(
        <>
            {props.funcao(props.vegetal)}
            <h2>{props.a}</h2>
            <h2>{props.b}</h2>
            <h2>{props.vegetal}</h2>
        </>
    )
}

export default Filho