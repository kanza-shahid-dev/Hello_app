import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import TabHeader from './TabHeader'

const TabScreen = (props) => {
    return (
        <ScrollView style={{backgroundColor:'white'}} StickyHeaderComponent={[0]} contentContainerStyle={{flexGrow:1}}>
        <View>
            <TabHeader title={props.title} onChangeText={props.onChangeText}/>
        </View>
        <View style={{flex:1,padding:5}}>
            {props.children}
        </View>
        </ScrollView>
    )
}

export default TabScreen
