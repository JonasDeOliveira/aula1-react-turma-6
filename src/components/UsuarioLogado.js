import React from 'react'
import If from './If'

function UsuarioLogado(props) {

    const usuario = props.usuario || {}

    // let usuario = {}
    // if (props.usuario) {
    //     usuario = props.usuario
    // } 

    return(
        <>
        <If test={usuario && usuario.nome && usuario.email}>
            <h2>Usuário Logado:</h2>
            <h3>
                {usuario.nome} - {usuario.email}
            </h3>
        </If>
        
        </>
    )
}

export default UsuarioLogado