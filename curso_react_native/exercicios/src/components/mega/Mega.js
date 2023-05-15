import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import Estilo from '../estilo'
import Numero from './Numero'

export default class Mega extends Component {
    state = {
        qtNumeros: this.props.qtNumeros,
        numeros: []
    }

    alterarQtdNumero = (qtde) => {
        this.setState({ qtNumeros: +qtde})
    }

    gerarNumeroNaoRepetido = nums => {
        const numNovo = parseInt(Math.random() * 60) + 1
        return nums.includes(numNovo) ? this.gerarNumeroNaoRepetido(nums) : numNovo
    }
    gerarNumeros = () => {
        const numeros = Array(this.state.qtNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoRepetido(n)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    // gerarNumeros = () => {
    //     const {qtNumeros} = this.state
    //     const numeros = []

    //     for (let i = 0; i < qtNumeros; i++) {
    //         const n = this.gerarNumeroNaoRepetido(numeros)
    //         numeros.push(n)
    //     }
    //     numeros.sort((a,b) => a - b)
    //     this.setState({ numeros })
    // }


    // alterarQtdNumero(qtde) {
    //     this.setState({ qtNumeros: qtde})
    // }

    // constructor(props) {
    //     super(props)

    //     this.alterarQtdNumero = this.alterarQtdNumero.bind(this)
    // }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <Numero key={num} num={num} />
        })
    }
    render () {
        return(
            <>
                <Text style={Estilo.txtG}>
                    Gerador da Mega Sena 
                    {this.state.qtNumeros}
                </Text>
                
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Quantidade de Números"
                    value = {`${this.state.qtNumeros}`}
                    //onChangeText={this.alterarQtdNumero} // vai com contrutor
                    //onChangeText={qtde => this.alterarQtdNumero(qtde)}
                    onChangeText={this.alterarQtdNumero}
                />
                <Button 
                    title='Gerar'
                    onPress={this.gerarNumeros}
                    color="#8FBC8F"
                    opacity= "1"
                />
                {/* <Text>
                    {this.state.numeros.join(',')}
                </Text> */}

                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}

