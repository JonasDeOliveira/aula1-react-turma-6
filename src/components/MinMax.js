import React from 'react'

function MinMax(props) {

    let soma = props.min + props.max

    return (
        <div>
            <h2>O valor {props.max} é maior que o valor {props.min}</h2>
            <h2>A soma é {soma}</h2>
        </div>
    
    )
}

export default MinMax