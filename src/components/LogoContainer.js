import React from 'react'
import { Image ,View} from 'react-native'

const LogoContainer = (props) => {
    return (
        <View>
        <Image source={require('../assets/images/logo.png')} 
        style={{margin:props.margin,alignSelf:'center',height:props.height,width:props.width}} />
        </View>
   
    )
}

export default LogoContainer
