import React from 'react'
import { View, Text,Image, ImageBackground } from 'react-native'
import colors from '../constants/colors'

const ChatListitem = (props) => {
    const item=props.data
    return (
        <View style={{flex:1,borderBottomWidth:0.35,flexDirection:'row',marginLeft:15,marginRight:15,marginTop:10,paddingBottom:10}}>
            <View >
                <ImageBackground source={item.image} style={{height:80,width:80,borderRadius:50,resizeMode:'contain'}}>
                 {item.isOnline?
                 <View style={{flex:1,marginBottom:5,marginRight:5,borderColor:'white',alignItems:'flex-end',justifyContent:'flex-end'}}><Image source={require('../assets/images/online.png')} style={{height:15,width:15}} /></View>
                 :
                 null
                 }
                 </ImageBackground>
            </View>
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:2,paddingLeft:20,justifyContent:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:18}}>{item.userName}</Text>
                        {item.newMsg?
                        <Image source={require('../assets/images/unreadMessage.png')} style={{marginLeft:15,height:10,width:10}}/>
                        :
                        null
                        }
                    </View>
                    <Text>{item.msgTime}</Text>
                </View>
                <Text style={{fontSize:14,color:colors.silver}}>Typing...</Text>
                </View>
            </View>

        </View>
    )
}

export default ChatListitem
