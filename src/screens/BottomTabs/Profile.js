import React from 'react'
import { View, Text,Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CallHistoryListitem from '../../components/CallHistoryListitem'
import TabScreen from '../../components/TabScreen'
import colors from '../../constants/colors'

const Profile = () => {
    const data=[
        {
            title:'this is address',icon:'map-marker',image:require('../../assets/images/user.png')
        },
        {
            title:'this is email',icon:'email',image:require('../../assets/images/user.png')
        },
        {
            title:'this is web',icon:'web',image:require('../../assets/images/user.png')
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

            <View style={{paddingLeft:20,paddingRight:20}}>
            <FlatList
            data={data}
            renderItem={({item})=>{
                return <View style={{flexDirection:'row',padding:13,alignItems:'center'}}>
                    <Icon name={item.icon} size={28} color={colors.silver}/>
                    <Text style={{paddingLeft:17,fontSize:15}}>{item.title}</Text>
                </View>
            }}
            />
            </View>

        </TabScreen>
    )
}

export default Profile
