import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import ButtonComp from '../components/ButtonComp'
import InputComp from '../components/InputComp'
import LogoContainer from '../components/LogoContainer'
import {width,height} from '../constants/ScreenSize'
import StyleSheet from '../constants/StyleSheet'

const Success = (props) => {
console.log(height/21)

    return (
        <ScrollView contentContainerStyle={StyleSheet.ScrollViewContentStyle}>
            <View style={StyleSheet.ScreenContainer} > 
           
            <LogoContainer margin={height/19} width={height*0.2} height={height*0.15} />
            
            <Image source={require('../assets/images/icon-check.png')} style={{marginTop:height/18,marginBottom:height/22}} />

            <Text style={StyleSheet.heading2}>Verification Successfull</Text>
            
            <View style={{flex:1,width:'100%',justifyContent:'flex-end'}}>
            <ButtonComp title="CONTINUE" onPress={()=>props.navigation.navigate("SetupProfile")}/>
            </View>
            </View>
        </ScrollView>
    )
}

export default Success
