

import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import Chat from '../screens/BottomTabs/Chat'
import Messages from '../screens/ChatNavigationScreens/Messages'


const ChatScreenNavigation = () => {
    const navigation=createStackNavigator()
    return (
        <navigation.Navigator initialRouteName="Chat" screenOptions={{headerShown:false}}>
            <navigation.Screen name="Chat" component={Chat} />
            <navigation.Screen name="Messages" component={Messages} />
        </navigation.Navigator>
    )
}

export default ChatScreenNavigation
