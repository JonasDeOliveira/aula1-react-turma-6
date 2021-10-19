import React from 'react'

function Titulo(props) {

    return (
        <>
            <h2 className="titulo">{props.principal}</h2>
            <h2>{props.secundario}</h2>
        </>   
    )
}

export default Titulo