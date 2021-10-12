import React,{useState} from 'react'
import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import RNPhoneCodeSelect from 'react-native-phone-code-select'
import StyleSheet from '../constants/StyleSheet'

const InputComp = (props) => {
    const type=props.type
    const [countryCodeVisibility,setcountryCodeVisibility]=useState(false)
    const[countryCode,setCountryCode]=useState({"dial_code": "+92"})
    return (
        <View style={{width:'100%',marginBottom:5}}>
            {(() => { switch(type)
              {
                  case 'phone':
            return <View style={{borderWidth:1,padding:1,borderRadius:9,paddingLeft:20,flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={()=>setcountryCodeVisibility(true)}>
            <Text>{countryCode.dial_code}</Text>
            <Icon name="caret-down" color="grey" size={20} style={{marginLeft:8,marginRight:5}}/>
            </TouchableOpacity>
            <RNPhoneCodeSelect
            visible={countryCodeVisibility}
            onDismiss={() => setcountryCodeVisibility(false)}
            onCountryPress={(country) =>setCountryCode(country)}
            />
            <TextInput placeholder={props.placeholder} value={props.value} keyboardType="number-pad" onChangeText={props.onChangeText}/>
            </View>

                 case 'description':
                   return <TextInput placeholder={props.placeholder} multiline={true} value={props.value} onChangeText={props.onChangeText} style={[StyleSheet.DescriptionInputFieldText]}/>
            
                 default:
                return <TextInput placeholder={props.placeholder} value={props.value} keyboardType={props.keyboardType} onChangeText={props.onChangeText} style={StyleSheet.InputFieldText}/>;
            }
          })()}
          <Text style={StyleSheet.error}>{props.error}</Text>
        </View>
    )
}

export default InputComp
