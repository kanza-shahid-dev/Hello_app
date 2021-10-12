import React,{useState} from 'react'
import { View,Text, Image, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'react-native-image-picker'
import {BottomSheet} from 'react-native-btr'
import StyleSheet from '../constants/StyleSheet'

const ImagePickerComp = (props) => {
  const [bottomSheetVisibility,setbottomSheetVisibility]=useState(false)
  const [imageSource,setimageSource]=useState(null)
  var options={}
   
  function Camera()
    {
      setbottomSheetVisibility(false)
      ImagePicker.launchCamera(options,response=>{
        if(response.didCancel)
        {
        }
        else if(response.error)
        {
        }
        else
        {
          setimageSource(response.assets[0].uri)
        }
      })

     
    }
    function Gallery()
    {
      setbottomSheetVisibility(false)
      ImagePicker.launchImageLibrary(options,response=>{
        if(response.didCancel)
        {
        }
        else if(response.error)
        {
        }
        else
        {
          setimageSource(response.assets[0].uri)
          
        }
      })

    }
    return (
        <TouchableOpacity onPress={()=>setbottomSheetVisibility(true)}>
           {imageSource?
           <Image source={{uri:imageSource}} style={{height:100,width:100,borderRadius:50,marginTop:25,marginBottom:45}}/>
           :
           <Image source={require('../assets/images/profileImage.png')} style={{marginTop:props.marginTop,marginBottom:props.marginBottom}}/>
        }
           <BottomSheet
      visible={bottomSheetVisibility}
      onBackdropPress={()=>setbottomSheetVisibility(false)}
      onBackButtonPress={()=>setbottomSheetVisibility(false)}
      >
        <View style={{backgroundColor:'white',padding:10}}>
          <Text style={StyleSheet.bottomSheetHeading}>Choose Image from Following</Text>
         
          <TouchableOpacity onPress={()=>Camera()}>
          <Text style={StyleSheet.bottomSheetText}>Capture from Camera</Text>
          </TouchableOpacity>
         
          <TouchableOpacity onPress={()=>Gallery()}>
          <Text style={StyleSheet.bottomSheetText}>Select from Gallery</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
        </TouchableOpacity>

    )
}

export default ImagePickerComp
