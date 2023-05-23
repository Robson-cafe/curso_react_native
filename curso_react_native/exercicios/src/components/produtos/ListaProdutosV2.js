import React from 'react'
import { Text, FlatList } from 'react-native'
import Estilo from '../estilo'
import Produtos from './Produtos'

export default props => {
    const produtosRender = ({ item: p }) => {
        return <Text>{p.id}) {p.nome} tem valor de R$ {p.preco}</Text>
    }

    return(
        <>
            <Text style={Estilo.txtG}>Lista de ProdutosV2:</Text>
            <FlatList
                data={Produtos}
                keyExtractor = {i => `${i.id}`}
                renderItem={produtosRender}
            />
        </>
    )
}