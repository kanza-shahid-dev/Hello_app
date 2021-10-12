import React from 'react'
import { View, Text,Image, FlatList } from 'react-native'
import CallHistoryListitem from '../../components/CallHistoryListitem'
import TabScreen from '../../components/TabScreen'
import colors from '../../constants/colors'

const UserChatInfo = () => {
    const data=[
        {
            userName:'Jessica',time:'2 hours',type:'call',image:require('../../assets/images/user.png')
        },
        {
            userName:'Jessica',time:'2 hours',type:'video',image:require('../../assets/images/user.png')
        },
    ]
    return (
        <TabScreen>
            <View style={{alignItems:'center'}}>
            <Image source={require('../../assets/images/userprofile.png')}/>
            <Text style={{fontSize:38,color:colors.primary,fontWeight:'700'}}>Marlene</Text>
            <Text style={{fontsize:16,color:colors.primary,fontWeight:'700'}}>Art. Director,21</Text>
            
            <View style={{flexDirection:'row',margin:20}}>
               <View style={{paddingRight:30}}><Image source={require('../../assets/images/icon-call-dark.png')}/></View>
               <View style={{paddingLeft:30}}><Image source={require('../../assets/images/icon-camera.png')}/></View>
            </View>

            <Text style={{textAlign:'center',marginLeft:40,marginRight:40,marginBottom:20}}>
            Hey Fly 9! {'\n'} I was tossing and turning all night! I haven’t slept a wink in 3 days! What’s keeping you up? Nothing, really.
            </Text>

            </View>

            <View style={{paddingLeft:5}}>
            <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>Call History</Text>
            <FlatList
            data={data}
            renderItem={({item})=>{
                return <CallHistoryListitem data={item}/>
            }}
            />
            </View>

        </TabScreen>
    )
}

export default UserChatInfo
