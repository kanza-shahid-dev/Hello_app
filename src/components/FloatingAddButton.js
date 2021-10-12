import React from 'react'
import { View, Text } from 'react-native'
import colors from '../constants/colors'
import { FAB } from 'react-native-paper';
const FloatingAddButton = () => {
    return (
        <FAB
        style={{  
        position: 'absolute',
        backgroundColor:colors.primary,
        margin: 16,
        right: 0,
        bottom: 0
    }}
        medium
        icon="plus"
        icon
        onPress={() => console.log('Pressed')}
      />
    )
}

export default FloatingAddButton
