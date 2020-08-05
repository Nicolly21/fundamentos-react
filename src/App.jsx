import './App.css'
import React from 'react'

import Primeiro from './componentes/Primeiro'
import ComParametro from './componentes/ComParametro'
import ComFilhos from './componentes/ComFilhos'
import Card from './componentes/layout/Card'
import Lista from  './componentes/lista'
import Condicional from './componentes/Condicional'
import CondicionalComIf from './componentes/CondicionalcomIf'
import Teste from './componentes/teste'


export default props => (
    <div className="App">

        <Card titulo="MeuTeste - If">
            <Teste numero={120}/>
        </Card>

        <Card  titulo=" Condicional v2 - Com If">
            <CondicionalComIf numero={12}/>
        </Card>

        
        <Card  titulo=" Condicional v1 - Op. Ternário">
            <Condicional numero={21}/>
        </Card>

        <Card  titulo="04 -Lista de Produtos">
            <Lista/>
        </Card>

        <Card  titulo="01 - Primeiro Componente">
            <Primeiro/>
        </Card>

{/* Tags que possuem filhos devem ter um corpo (tag de abertura e fechamento) */}
        <Card  titulo="03 - Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>Alura</li>
                    <li>Rocketseat</li>
                    <li>Macoratti</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card  titulo="02 - Componente com parâmetros">
            <ComParametro titulo="Tema" texto="Texto"/>
        </Card>

    </div>
);