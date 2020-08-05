import React from 'react'

export default props => {

    function teste(numero){
        if (numero % 2 == 0){
            return <span>Numero Par</span>
        } else {
            return <span>Numero Impar</span>
        }
    }

    return (
        <div>
            <h2>O número é {props.numero}</h2>
            {teste(props.numero)}
        </div>
    )

}
//Dentro de um return só deve retornar um elemento, logo se faz necessário usar a div