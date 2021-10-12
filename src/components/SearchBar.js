import React from 'react'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../constants/colors';
import StyleSheet from '../constants/StyleSheet';

const SearchBar = (props) => {
    return (
        <View style={StyleSheet.SearchBar}>
        <Icon name="search" size={22} color={colors.primary}/>
        <TextInput placeholder="Search" value={props.value} onChangeText={props.onChangeText} style={StyleSheet.SearchBarInput}/>
        </View>
    )
}

export default SearchBar
