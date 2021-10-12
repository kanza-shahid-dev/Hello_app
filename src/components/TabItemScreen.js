import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import ChatTabHeader from './ChatTabHeader'

const TabItemScreen = (props) => {
    return (
        <ScrollView style={{backgroundColor:'white'}} contentContainerStyle={{flexGrow:1}}>
        <View>
            <ChatTabHeader title={props.title} onPress={()=>props.navigation.goBack()} user={props.user}/>
        </View>
        <View style={{flex:1,padding:5}}>
            {props.children}
        </View>
        </ScrollView>
    )
}

export default TabItemScreen
