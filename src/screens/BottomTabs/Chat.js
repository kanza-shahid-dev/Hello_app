import React from 'react'
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import AddButton from '../../components/FloatingAddButton'
import ChatListitem from '../../components/ChatListitem'
import TabHeader from '../../components/TabHeader'
import TabScreen from '../../components/TabScreen'
import FloatingAddButton from '../../components/FloatingAddButton'

const Chat = (props) => {
    const data=[
        {userName:'Jessica',status:'Typing',isOnline:true,newMsg:true,image:require('../../assets/images/user.png'),msgTime:'2 hours'},
        {userName:'Jessica',status:'Typing',isOnline:false,newMsg:true,image:require('../../assets/images/user.png'),msgTime:'2 hours'},
        {userName:'Monica',status:'Typing',isOnline:false,newMsg:true,image:require('../../assets/images/user.png'),msgTime:'2 hours'},
        {userName:'Monica',status:'Typing',isOnline:false,newMsg:false,image:require('../../assets/images/user.png'),msgTime:'2 hours'},
        {userName:'Monica',status:'Typing',isOnline:false,newMsg:false,image:require('../../assets/images/user.png'),msgTime:'2 hours'},
        {userName:'Monica',status:'Typing',isOnline:false,newMsg:false,image:require('../../assets/images/user.png'),msgTime:'2 hours'},
        {userName:'Monica',status:'Typing',isOnline:false,newMsg:false,image:require('../../assets/images/user.png'),msgTime:'2 hours'},
        {userName:'Monica',status:'Typing',isOnline:false,newMsg:false,image:require('../../assets/images/user.png'),msgTime:'2 hours'},
        {userName:'Monica',status:'Typing',isOnline:false,newMsg:false,image:require('../../assets/images/user.png'),msgTime:'2 hours'},

    ]
    return (
         <TabScreen title="CHAT">
             <FlatList
              data={data}
              renderItem={({item})=>{
                  return <TouchableOpacity onPress={()=>props.navigation.navigate("Messages",{item})}>
                  <ChatListitem data={item}/>
                  </TouchableOpacity>
              }}
              />
             <View>
              <FloatingAddButton/>
              </View>
        </TabScreen>
    )
}

export default Chat
