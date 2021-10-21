import React, { useState } from 'react'

function DigiteSeuNome(props) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    return(
        <>
            <h1>Cadastro</h1>
            <h2>{nome}</h2>
            <h2>{email}</h2>
            <div>
                <input type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={function(event) {
                        setNome(event.target.value)
                    }}/>
            </div>
            <div>
                <input type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}/>
            </div>
                
        </>
    )
}

export default DigiteSeuNome