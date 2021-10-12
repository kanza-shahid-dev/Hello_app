import React,{useState} from 'react'
import { View, Text, ScrollView, Image, Alert } from 'react-native'
import ButtonComp from '../components/ButtonComp'
import ImagePickerComp from '../components/ImagePickerComp'
import InputComp from '../components/InputComp'
import StyleSheet from '../constants/StyleSheet'
import {width,height} from '../constants/ScreenSize'


const SetupProfile = (props) => {
    
    //fields
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[bio,setBio]=useState('')
    const[phone,setPhone]=useState('')

    //erros
    const[nameError,setNameError]=useState(true)
    const[emailError,setEmailError]=useState(true)
    const[bioError,setBioError]=useState(true)
    const[phoneError,setphoneError]=useState(true)


    function SetProfile()
    {
        if(nameError==false && emailError==false && bioError==false)
        props.navigation.navigate("Home")
        
        else
        Alert.alert("Invalid","Form is invalid")
    }
    function validateName(value)
    {
        setName(value)
        if(value.length==0)
            setNameError("Name required")
        else if(value.length <4)
            setNameError("Should have atleast 5 characters")
        else
            setNameError(false)
    }
    function validateEmail(value)
    {
        setEmail(value)
        if(value.length==0)
            setEmailError("Email required")
        else if( !(value.includes("@") && value.includes(".com")) )
            setEmailError("Invalid Email")
        else
           setEmailError(false)
    }
    function validateBio(value)
    {
        setBio(value)
        if(value.length==0)
           setBioError("Bio required")
        else
           setBioError(false)

    }
    function validatePhone(value)
    {
        setPhone(value)
        if(value.length==0)
             setphoneError("Phone No required")
        else
             setphoneError(false)
    }
    
    return (
        <ScrollView contentContainerStyle={StyleSheet.ScrollViewContentStyle}>
            <View style={StyleSheet.ScreenContainer} > 

            <Text style={StyleSheet.heading3}>Complete Profile</Text>

            <ImagePickerComp marginTop={height/30} marginBottom={height/20} />


            <InputComp placeholder="Name" value={name} error={nameError} onChangeText={(value)=>validateName(value)}/>
            
            <InputComp placeholder="Email" value={email} error={emailError} onChangeText={(value)=>validateEmail(value)} keyboardType="email-address"/>
            
            <InputComp placeholder="Phone No" type="phone" value={phone} error={phoneError} onChangeText={(value)=>validatePhone(value)}/>

            <InputComp placeholder="Bio" type="description" value={bio} error={bioError}   onChangeText={(value)=>validateBio(value)}/>

            <View style={{flex:1,width:'100%',justifyContent:'flex-end'}}>
            <ButtonComp title="CONTINUE" onPress={()=>SetProfile()} />
            </View>
            </View>
        </ScrollView>
    )
}

export default SetupProfile
