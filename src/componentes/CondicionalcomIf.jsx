import React from 'react'
import If from './if'

export default props => 
    <div>
        <h2> O número é {props.numero}</h2>
            <If teste= {props.numero % 2 == 0}>
                <span>O número é par!</span>
            </If>
            <If teste={props.numero % 2 == 1}>
                <span>O número é ímpar!</span>
            </If>
    </div>

//Todo número ímpar quando é dividido por 2 resta 1
