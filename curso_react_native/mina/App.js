import React, {Component} from 'react'
import type {Node} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import params from './src/params'
//import Field from './src/components/Field'
import MineField from './src/components/MineField'
import { createMinedBoard } from './src/functions'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
    }
  }

  render() {
    return (
      <View style={styles.conteiner}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        {/* <Field />
        <Field opened />
        <Field opened nearMines={1}/>  
        <Field opened nearMines={2}/>  
        <Field opened nearMines={3}/>  
        <Field opened nearMines={6}/>  
        <Field mined />  
        <Field mined opened />  
        <Field mined opened explode />
        <Field flagged />
        <Field flagged opened /> */}
        <View style={styles.board}>
          <MineField board={this.state.board} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'flex-end',
    //alignItems: 'center',
    //backgroundColor: '#F5FCFF'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },

})
