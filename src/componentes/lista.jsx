import React from 'react'

import produtos from '../data/produtos.js'

export default  props => {

    function getProdutosListItem(){
        return produtos.map( prod => {
            return <li key={prod.id}> 
            {prod.id} - {prod.nome} - R$ {prod.preco} 
            </li>
        })
    }

    return (
        <div>
            <h2>Lista de Produtos</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )

}
//ATENÇÃO: Cada filho de uma lista deve ter uma propriedade chave única para que o React detecte possiveis alterações
// Solução: key={prod.id}