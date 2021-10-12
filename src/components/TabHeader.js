import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../constants/colors'
import StyleSheet from '../constants/StyleSheet'
import InputComp from './InputComp'
import SearchBar from './SearchBar'

const TabHeader = (props) => {
    return (
        <View style={StyleSheet.TabHeaderStyle}>
            <View style={{alignItems:'center',paddingLeft:5}}><Text style={StyleSheet.TabHeaderHeading}>{props.title}</Text></View>
            <View style={{flex:1}}><SearchBar onChangeText={props.onChangeText}/></View>
            <View style={{paddingRight:5,alignItems:'flex-end'}}><Icon name="settings-outline" color="white" size={23}/></View>
        </View>
    )
}

export default TabHeader
