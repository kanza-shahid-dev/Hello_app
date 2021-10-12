import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const PopupListitem = (props) => {
    return (
        <View style={{flexDirection:'row',alignSelf:'baseline',alignItems:'center'}}>
          <Icon name="camera" color="black" size={23}/>
            <Text style={{fontSize:21}}>{props.title}</Text>
        </View>
    )
}
export default PopupListitem
