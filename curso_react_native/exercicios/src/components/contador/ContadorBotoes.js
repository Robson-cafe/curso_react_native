import React from 'react'
import { Button } from 'react-native'


export default props => {
   <>
        <Button title="+" onPress={props.inc} />
        <Button title="-" onPress={props.dec} />
   </>
}