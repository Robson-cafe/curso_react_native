import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'
export default props => {
    return(
        <View style = {style.FlexV2}>
        <Quadrado cor = '#ff801a'/>
        <Quadrado cor = '#F00'/>
        <Quadrado cor = '#dd22c1'/>
        <Quadrado cor = '#0F0'/>
        <Quadrado cor = '#009'/>
        <Quadrado cor = '#090'/>
        </View>
    )
}
//alinhamento eixo cruzado
const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: '100%',
        //alignItems: "flex-end",
        alignItems: "flex-start",
        //justifyContent: "space-between",
        //justifyContent: "center",
        justifyContent: "space-evenly",
        backgroundColor:'#000'
    }
})