import React, { useState } from 'react'

function Contador(props) {

   const [numero, setNumero] = useState(props.inicial)
   const [nome, setNome] = useState(['Jonas'])

    const incremento = () => {
       setNumero(numero + props.passo) 
       setNome('Eliel')
    }

    const decremento = () => {
        setNumero(numero - props.passo)
        setNome('William')  
    }

    return(
        <>
        <h1>{nome}</h1>
        <h2>{numero}</h2>
        <button onClick={incremento}>+</button>
        <button onClick={decremento}>-</button>
        </>
    )
}

export default Contador