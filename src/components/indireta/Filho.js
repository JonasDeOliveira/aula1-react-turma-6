import React from 'react'

function Filho(props) {
    function gerarNumero() {
        return Math.random()
    }

    return(
        <>
        <button onClick={function(){
            const n = gerarNumero()
            props.funcao(n, 'O valor é')
        }}>
            Executar
        </button>
        </>
    )
}

export default Filho