import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import Produtos from './Produtos'

export default props => {
    function obterLista() {
        return Produtos.map(p => {
            return (
                <Text key={p.id}>{p.id}) {p.nome} tem valor de R$ {p.preco}</Text>
            )
        })
    }

    return(
        <>
            {/* <Text style={Estilo.txtG}>Lista de Produtos:</Text>
            {Produtos.map(p => {
                return <Text key={p.id}>{p.id}) {p.nome} tem valor de R$ {p.preco}</Text>
            })} */}
            <Text style={Estilo.txtG}>Lista de Produtos:</Text>
            {obterLista()}
        </>
    )
}