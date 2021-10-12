import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import colors from '../constants/colors'
import StyleSheet from '../constants/StyleSheet'

const ButtonComp = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{backgroundColor:colors.primary,borderRadius:30,padding:15}}>
            <Text style={StyleSheet.primaryButtonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonComp
