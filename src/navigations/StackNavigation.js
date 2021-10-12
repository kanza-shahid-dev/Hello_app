import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Login from '../screens/Login'
import Verification from '../screens/Verification'
import Success from '../screens/Success'
import SetupProfile from '../screens/SetupProfile'
import Home from '../screens/Home'
import ChatScreenNavigation from './ChatScreenNavigation'

const StackNavigation = () => {
    const navigation=createStackNavigator()
    return (
        <navigation.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <navigation.Screen name="Login" component={Login} />
            <navigation.Screen name="Verification" component={Verification} />
            <navigation.Screen name="Success" component={Success} />
            <navigation.Screen name="SetupProfile" component={SetupProfile} />
            <navigation.Screen name="Home" component={Home} />
        </navigation.Navigator>
    )
}

export default StackNavigation
