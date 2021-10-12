import React from 'react'
import { View, Text } from 'react-native'
import TabItemScreen from '../../components/TabItemScreen'
import TabScreen from '../../components/TabScreen'

const Messages = (props) => {
    return (
        <TabItemScreen title="CHAT" navigation={props.navigation} user={props.route.params.item}>
            <Text>Hi</Text>
        </TabItemScreen>
    )
}

export default Messages
