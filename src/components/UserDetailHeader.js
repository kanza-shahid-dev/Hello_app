import React from 'react'
import { View, Text ,Image} from 'react-native'

const UserDetailHeader = (props) => {
    return (
        <View style={{flex:1,paddingLeft:10,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../assets/images/user.png')} style={{height:55,width:55}}/>
            <View style={{flex:1,paddingLeft:10}}>
            <Text style={{fontSize:18,color:'white'}}>{props.user.userName}</Text>
            <Text style={{fontSize:12,color:'white'}}>{props.user.status}</Text>
            </View>
        </View>
    )
}

export default UserDetailHeader
