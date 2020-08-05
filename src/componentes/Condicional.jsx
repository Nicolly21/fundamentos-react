import React from 'react'

export default props => 
    <div>
        <h2> O número é {props.numero}</h2>
        { props.numero % 2 == 0 ? 
            <span>Par</span> :  <span>Ímpar</span>
        }
    </div>

//Operador ternário ?
// Sintaxe:  condição ? instrução1 : instrução 2
// Onde instrução1 é executada quando a condição é true
// A instrução2 é executada quando a condição é false