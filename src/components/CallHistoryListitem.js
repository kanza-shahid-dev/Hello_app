import React from 'react'
import { View, Text,Image, ImageBackground } from 'react-native'
import colors from '../constants/colors'

const CallHistoryListitem = (props) => {
    const item=props.data
    return (
        <View style={{flex:1,borderBottomWidth:0.2,flexDirection:'row',marginLeft:15,marginRight:15,marginTop:10,paddingBottom:10}}>
                
            {/** Image and Online Offline Status */}
            <ImageBackground source={item.image} style={{height:80,width:80,borderRadius:50,resizeMode:'contain'}}>
            {item.isOnline?
            <View style={{flex:1,marginBottom:5,marginRight:5,borderColor:'white',alignItems:'flex-end',justifyContent:'flex-end'}}><Image source={require('../assets/images/online.png')} style={{height:15,width:15}} /></View>
            :
            null
            }
            </ImageBackground>

            {/**  Remaining Flex */}
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1,paddingLeft:20,flexDirection:'row'}}>
                
                {/** Name and Time Container */}
                <View style={{flex:1,justifyContent:'space-around'}}>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:18}}>{item.userName}</Text>
                       <Text style={{fontSize:14,color:colors.silver}}>{item.time}</Text>
                 
                </View>
                {/** Icon Container */}
                <View style={{justifyContent:'center'}}>
                   {(()=>{
                       if(item.type=="call")
                        return <Image source={require('../assets/images/icon-call-dark.png')} style={{height:20,width:20}}/>
                       else
                       return <Image source={require('../assets/images/icon-camera.png')}/>

                   })()}
                    </View>
                </View>

            </View>
        </View>
    )
}

export default CallHistoryListitem
