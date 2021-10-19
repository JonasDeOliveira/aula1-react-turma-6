import React from 'react'
import Filho from './Filho'

function Pai(props) {
    let x = 15
    let y = 200

    function plantar(vegetal) {
        console.log(`plantando ${vegetal}`)
    }

    return(
        <>
            <Filho a={x} b={y} 
                vegetal="Brocolis ninja" 
                funcao={plantar}/>

            <Filho a={x + 20} b={y + 50} 
                vegetal="Brocolis rama" 
                funcao={plantar}/>
        </>
    )
}

export default Pai