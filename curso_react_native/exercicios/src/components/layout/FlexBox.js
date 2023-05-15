import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'
export default props => {
    return(
        <View style = {style.FlexV1}>
        <Quadrado cor = '#ff801a'/>
        <Quadrado cor = '#F00'/>
        <Quadrado cor = '#dd22c1'/>
        <Quadrado cor = '#0F0'/>
        <Quadrado cor = '#009'/>
        <Quadrado cor = '#090'/>
        </View>
    )
}
//alinhamento eixo principal
const style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor:'#000'
    }
})