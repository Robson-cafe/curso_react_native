import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

//import Primeiro from './components/Primeiro'
//import MinMax from './components/MinMax'
//import Aleatorio from './components/Aleatorio'
//import Titulo from './components/Titulo'
//import Botao from './components/Botao'
//import CompPadrao, { Comp1, Comp2 } from './components/Multi'
//import Pai from './components/direta/Pai'
//import Pai from './components/indireta/Pai'
//import ContadorV2 from './components/contador/ContadorV2'
//import Diferenciar from './components/Diferenciar'
//import ParImpar from './components/ParImpar'
//import Pai from './components/relacao/Pai'
//import Filho from './components/relacao/Filho'
//import UsuarioLogado from './components/UsuarioLogado'
//import ListaProdutos from './components/produtos/ListaProdutos'
//import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
//import DigiteSeuNome from './components/DigiteSeuNome'
//import Quadrado from './components/layout/Quadrado'
//import FlexBox from './components/layout/FlexBox'
//import FlexBoxV2 from './components/layout/FlexBoxV2'
//import FlexBoxV3 from './components/layout/FlexBoxV3'
//import FlexBoxV4 from './components/layout/FlexBoxV4'
import Mega from './components/mega/Mega'


// const App = function () {
//     return <Text>Primeiro Componente!</Text>
// }

// export default App

// export default function () {
//     return <Text>Primeiro Componente!!</Text>
// }

// export default () => {
//     return <Text>Primeiro Componente!!!</Text>
// }

//export default () => <Text>Primeiro Componente!!!!</Text>


export default () => (
    <SafeAreaView style={style.App}>
        <Mega qtNumeros = {6}/>
        {/*
        <FlexBoxV4 />
        <FlexBoxV3 />
        <FlexBoxV2 />
        <FlexBox />
        <DigiteSeuNome />
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario={{ nome: 'Gui', email: 'gui@gui.com' }}/>
        <UsuarioLogado usuario={{ nome: 'Ana' }}/>
        <UsuarioLogado usuario={{ email: 'fddfg@gui.com' }}/>
        <Pai>
            <Filho nome = "Paulo" sobrenome = "Cunha" />
            <Filho nome = "Carla" sobrenome = "Cunha" />
        </Pai>
        <Pai>
            <Filho nome = "Robson" sobrenome = "Silva" />
            <Filho nome = "Melissa" sobrenome = "Silva" />
            <Filho nome = "Théo" sobrenome = "Silva" />
        </Pai>
        <ParImpar num={2}/>
        <Diferenciar />
        <ContadorV2 />
        <Pai />
        <Pai />
        <Botao />
        <Aleatorio min={1} max={60}/>
        <Titulo principal="Cadastro"
            secundario="Tela de cadastro do produto"/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <MinMax min={3} max={20} />
        <MinMax min={39} max={90} />
         <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})

