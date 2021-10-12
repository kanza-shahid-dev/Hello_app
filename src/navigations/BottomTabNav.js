import React from 'react'
import { View, Text,Image } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Chat from '../screens/BottomTabs/Chat';
import Calls from '../screens/BottomTabs/Calls';
import Sms from '../screens/BottomTabs/Sms';
import Profile from '../screens/BottomTabs/Profile';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../constants/colors';
import ChatScreenNavigation from './ChatScreenNavigation';

const BottomTabNav = () => {
    const navigation=createBottomTabNavigator();
    return (
        <navigation.Navigator initialRouteName="Chat" screenOptions={{headerShown:false,tabBarActiveTintColor:'black',tabBarLabelStyle:{fontWeight:'bold',fontSize:14},tabBarStyle:{height:70,paddingBottom:10}}}>
            <navigation.Screen 
            name="Chat" 
            component={ChatScreenNavigation} 
            options={{tabBarIcon:({focused})=><Image source={focused? require('../assets/images/icon-chat-selected.png'):require('../assets/images/icon-chat.png')}/>}}/>
            <navigation.Screen 
            name="Calls" 
            component={Calls} 
            options={{tabBarIcon:({focused})=><Image source={focused?require('../assets/images/icon-call-selected.png'):require('../assets/images/icon-call.png')}/>}} />
            <navigation.Screen 
            name="SMS" 
            component={Sms} 
            options={{tabBarIcon:({focused})=><Image source={focused?require('../assets/images/icon-delete.png'):require('../assets/images/icon-delete.png')}/>}} />
            <navigation.Screen 
            name="Profile" 
            component={Profile} 
            options={{tabBarIcon:({focused})=><Image source={focused?require('../assets/images/icon-user-selected.png'):require('../assets/images/icon-user.png')}/>}} />

        </navigation.Navigator>
    )
}

export default BottomTabNav
