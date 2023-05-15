import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'
export default props => {
    return(
        <View style = {style.FlexV4}>
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>
        </View>
    )
}

const style = StyleSheet.create({
    // o restante da sobra do height(V0), e dividido entre os flexGrow exitentesntes na proporção que é atribuido.
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor:'#000'
    },
    V0: {
        height: 300,
        backgroundColor: '#009'
    },
    V1: {
        flexGrow: 9,
        backgroundColor: '#ff801a'
    },
    V2: {
        flexGrow: 1,
        backgroundColor:'#dd22c1'
    },
})