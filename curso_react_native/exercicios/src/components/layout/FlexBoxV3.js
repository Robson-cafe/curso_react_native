import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'
export default props => {
    return(
        <View style = {style.FlexV3}>
            <Quadrado cor = '#ff801a' lado = {20}/>
            <Quadrado cor = '#F00' lado = {30}/>
            <Quadrado cor = '#dd22c1' lado = {40}/>
            <Quadrado cor = '#0F0' lado = {50}/>
            <Quadrado cor = '#009' lado = {60}/>
        </View>
    )
}
//alinhamento eixo cruzado
const style = StyleSheet.create({
    FlexV3: {
        flexDirection: "row",
        //justifyContent: "flex-end",
        justifyContent: "space-evenly",
        //alignItems: "baseline",
        alignItems: "flex-start",
        //alignItems: "stretch",
        //flexDirection: "row-reverse",
        //flexDirection: "column",
        height: 350,
        width: '100%',
        backgroundColor:'#000'
    }
})