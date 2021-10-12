import React from 'react'
import { View, Text } from 'react-native'
import CodeInput from 'react-native-confirmation-code-input';
import StyleSheet from '../constants/StyleSheet';

const CodeVerification = (props) => {
    return (
        <View style={{height:100}}>
        <CodeInput
        activeColor='black'
        inactiveColor='black'
        value={props.value}
        size={51}
        space={20}
        codeLength={4}
        fontSize={30}
        color='grey'//input color
        keyboardType='phone-pad'
        codeInputStyle={{ borderWidth: 2}}
        onFulfill={(code) => props.navigation.navigate("Success")}
        onChangeText={(value)=>console.log(value)}
        onCodeChange={(code)=>console.log("value",code)}
        containerStyle={{marginBottom:1}}
      />
      <Text style={StyleSheet.error}>{props.error}</Text>
      </View>
      
    )
}

export default CodeVerification
