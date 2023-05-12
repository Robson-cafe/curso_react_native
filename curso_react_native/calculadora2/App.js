import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import Button from './src/components/Button'
import Display from './src/components/Display'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0], // primeiro numero, segundo numero
  currentValue: 0, //valor corrente no indice
}

export default class App extends Component {
  state = {...initialState} //clone 

  addDigit = n => {
    //this.setState({ displayValue: n }) testar
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay //limpa os zeros a direita na primeira condição

    if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
      return 
    }

    const currentValues = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValues + n 
    this.setState({ displayValue, clearDisplay: false })

    if (n !== '.') {
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.currentValue] = newValue
      this.setState({ values })
    }
  }

  clearMemory = () => {
    //this.setState({ displayValue: '0' }) teste
    this.setState({ ...initialState })
  }

  setOperation = operation => {
    if (this.state.currentValue === 0) {
      this.setState({ operation, currentValue: 1, clearDisplay: true })
    } else {
      const equals = operation === '='
      const values = [...this.state.values]
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      }
      catch (e) {
        values[0] = this.state.values[0]
      }

      values[1] = 0
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        //clearDisplay: !equals,
        clearDisplay: true, //limpa o display dps do igual ao digitar o proximo numero
        values,
      })
    }
  }

  render() {
    return (
      <View style={styles.conteiner}>
        <Display value={this.state.displayValue}/>
        <View style={styles.buttons}>
          <Button label='AC' triple onClick={this.clearMemory} />
          <Button label='/' oparation onClick={this.setOperation}/>
          <Button label='7' onClick={this.addDigit}/>
          <Button label='8' onClick={this.addDigit}/>
          <Button label='9' onClick={this.addDigit}/>
          <Button label='*' oparation onClick={this.setOperation}/>
          <Button label='4' onClick={this.addDigit}/>
          <Button label='5' onClick={this.addDigit}/>
          <Button label='6' onClick={this.addDigit}/>
          <Button label='-' oparation onClick={this.setOperation}/>
          <Button label='1' onClick={this.addDigit}/>
          <Button label='2' onClick={this.addDigit}/>
          <Button label='3' onClick={this.addDigit}/>
          <Button label='+' oparation onClick={this.setOperation}/>
          <Button label='0' double onClick={this.addDigit}/>
          <Button label='.' onClick={this.addDigit}/>
          <Button label='=' oparation onClick={this.setOperation}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteiner: {
      flexGrow: 1,
  },

  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

