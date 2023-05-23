import React, { Fragment } from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

//com view
// export default props => {
//     return (
//         <View>
//             <Text style={Estilo.txtG}>{props.principal}</Text>
//             <Text style>{props.secundario}</Text>
//         </View>
//     )
// }

export default props => {
        return (
            <Fragment>
                <Text style={Estilo.txtG}>{props.principal}</Text>
                <Text style>{props.secundario}</Text>
            </Fragment>
        )
    }