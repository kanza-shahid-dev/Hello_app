import React,{useState} from 'react'
import { View, Text, ScrollView, Image, Alert, Dimensions } from 'react-native'
import ButtonComp from '../components/ButtonComp'
import InputComp from '../components/InputComp'
import StyleSheet from '../constants/StyleSheet'
import {Checkbox} from 'react-native-paper'
import colors from '../constants/colors'
import LogoContainer from '../components/LogoContainer'
import {width,height} from '../constants/ScreenSize'


const Login = (props) => {
    const[phone,setPhone]=useState('')
    const[phoneError,setphoneError]=useState(true)
    function validatePhone(value)
    {
        setPhone(value)
        if(value.length==0)
             setphoneError("Phone No required")
        else
             setphoneError(false)
    }
    function Login()
    {
        if(phoneError==false)
        props.navigation.navigate("Verification")
        else
        setphoneError("Phone No required")
        
    }

    const[checked,setChecked]=useState(false)
    return (
        <ScrollView contentContainerStyle={StyleSheet.ScrollViewContentStyle}>
            <View style={StyleSheet.ScreenContainer}>
           
            <LogoContainer margin={height/19} width={height*0.2} height={height*0.15} />
           
            <Text style={StyleSheet.heading1}>Welcome to Halloo</Text>
            <Text style={[StyleSheet.text1,{marginBottom:45}]}>Please Enter Your Number to Signup</Text>

            <InputComp placeholder="Phone No" type="phone" value={phone} error={phoneError} onChangeText={(value)=>validatePhone(value)} />

            <View style={{flexDirection:'row',marginBottom:20}}>
            <View style={{justifyContent:'center'}}>
            <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {setChecked(!checked)}}
                color={colors.primary}
                />
             </View>   
            <View style={{flex:1,paddingLeft:5}}>
            <Text style={StyleSheet.descriptionText}>By continuing you will receive a verification code to your phone number by SMS.
            Message and data rates may apply. </Text>
        
            </View>
            </View>

            <View style={{flex:1,width:'100%',justifyContent:'flex-end'}}>
            <ButtonComp title="LOGIN" onPress={()=>Login()}/>
            </View>
            </View>
        </ScrollView>
    )
}

export default Login
