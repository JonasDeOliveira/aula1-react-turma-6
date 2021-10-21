import React from 'react'
import produtos from './produtos'

function ListaProdutos(props) {

    function obterLista() {
        return produtos.map((item) => {
            return (
                <li key={item.id}>
                    {item.id} {item.nome} preço R$ {item.preco}
                </li>
            )
        })
    }

    return(
        <>
            <h2>Lista de Produtos</h2>
            <ul>
               {obterLista()}
            </ul>
            
        </>
    )
}

export default ListaProdutos