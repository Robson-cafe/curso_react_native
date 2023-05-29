import React, {Component} from 'react'
import type {Node} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component {
  render() {
    return (
      <View style={styles.conteiner}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1}/>  
        <Field opened nearMines={2}/>  
        <Field opened nearMines={3}/>  
        <Field opened nearMines={6}/>  
        <Field mined />  
        <Field mined opened />  
        <Field mined opened explode />
        <Field flagged />
        <Field flagged opened />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
