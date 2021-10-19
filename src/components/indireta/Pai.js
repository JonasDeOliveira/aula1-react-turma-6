import React, { useState } from 'react'
import Filho from './Filho'

function Pai(props) {
    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)

    function exibirValor(numero, texto) {
        setNum(numero)
        setTexto(texto)
        
    }

    return(
        <>
        <h2>
            {texto} {num}
        </h2>
        <Filho funcao={exibirValor}/>
        </>
    )
}

export default Pai