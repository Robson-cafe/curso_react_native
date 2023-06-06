import React, {Component} from 'react'
import type {Node} from 'react'
import {StyleSheet, Text, View, Alert} from 'react-native'
import params from './src/params'
//import Field from './src/components/Field'
import MineField from './src/components/MineField'
import Header from './src/components/Header'
import LevelSelection from './src/screens/LevelSelection'

import { 
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from './src/functions'

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
      won: false,
      lost: false,
      showLevelSelection: false,
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)

    const lost = hadExplosion(board)

    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Você perdeu mane!', 'Que tanso')
    }

    if (won) {
      Alert.alert('Você ganhou tansinho')
    }

    this.setState({ board, lost, won })
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if (won) {
      Alert.alert('Você ganhou tansinho')
    }

    this.setState({ board, won })
  }

  onLevelSelected = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }

  render() {
    return (
      <View style={styles.conteiner}>
        {/* <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text> */}
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
        <LevelSelection isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({ showLevelSelection: false })} />
        <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
            onNewGame={() => this.setState(this.createState())} 
            onFlagPress={() => this.setState({ showLevelSelection: true })}/>
        <View style={styles.board}>
          <MineField board={this.state.board} 
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField} />
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
