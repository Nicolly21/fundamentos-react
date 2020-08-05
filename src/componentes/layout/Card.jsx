import './Card.css'
import React from 'react'

export default props =>
    <div className="Card">
        <div className="Conteudo">
            {props.children}
        </div>
        <div className="Footer">
            {props.titulo}
        </div>
    </div>

//props.children é responsável por exibir qualquer objeto adicionado no corpo da tag Card no index.js
//props.titulo é adicionado valor dentro da tag, como um atributo html