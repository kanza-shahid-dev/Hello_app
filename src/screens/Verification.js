import React,{useState} from 'react'
import { View, Text, ScrollView, Image, Dimensions } from 'react-native'
import ButtonComp from '../components/ButtonComp'
import CodeVerification from '../components/CodeVerification'
import InputComp from '../components/InputComp'
import StyleSheet from '../constants/StyleSheet'
import {width,height} from '../constants/ScreenSize'
import LogoContainer from '../components/LogoContainer'

const Verification = (props) => {
    const [code,setCode]=useState('')

    const[codeError,setcodeError]=useState(true)

    function validateInput(value)
    {
        console.log(value)
        setCode(value)
        if(value.length==0)
        setcodeError("Code Required")
        else
        setcodeError(false)
    }
    function Verify()
    {
        if(codeError==false)
        props.navigation.navigate("Success")
        else
        setcodeError("Code Required")
    }

    return (
        <ScrollView contentContainerStyle={StyleSheet.ScrollViewContentStyle}>
            <View style={StyleSheet.ScreenContainer} > 

            <LogoContainer margin={height/19} width={height*0.2} height={height*0.15} />
            
            <Text style={StyleSheet.heading1}>Verification Code</Text>
            <Text style={[StyleSheet.text1,{paddingLeft:10,paddingRight:10}]}>We have sent you a code on your phone Number</Text>
            <Text style={[StyleSheet.text1,{marginTop:8}]}>Enter Code Below</Text>
            
            <CodeVerification navigation={props.navigation} value={code} error={codeError} onCodeChange={(value)=>validateInput(value)} />
            
            <View style={{flex:1,width:'100%',justifyContent:'flex-end'}}>
            <ButtonComp title="VERIFY" onPress={()=>Verify()}/>
            </View>
            </View>
        </ScrollView>
    )
}

export default Verification
