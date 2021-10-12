import React,{useState} from 'react'
import { View, Text,Image,TouchableOpacity, Modal, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../constants/colors'
import { height } from '../constants/ScreenSize'
import StyleSheet from '../constants/StyleSheet'
import InputComp from './InputComp'
import PopupListitem from './PopupListitem'
import SearchBar from './SearchBar'
import UserDetailHeader from './UserDetailHeader'

const ChatTabHeader = (props) => {
const [settingsModalVisibility,setsettingsModalVisibility]=useState(false)
const settingsItemData=[
    {icon:'delete',title:'Forward Message'},
    {icon:'delete',title:'Delete for All'},
    {icon:'delete',title:'Delete for Me'},
    {icon:'delete',title:'Mark as Read'},

]
    const settingsModal=()=>{
return <View><Text>Hello</Text></View>
    }

    return (
        <View style={StyleSheet.TabHeaderStyle}>
            
            <TouchableOpacity onPress={props.onPress} style={{alignItems:'center',paddingLeft:5}}>
            <Icon name="arrow-back" color="white" size={23}/>
            </TouchableOpacity>

            <UserDetailHeader user={props.user}/>
           

            <View style={{flexDirection:'row',paddingRight:5,alignItems:'flex-end'}}>
                <TouchableOpacity>
                    <Icon name="videocam-sharp" color="white" size={23} style={{paddingLeft:5,paddingRight:5}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Icon name="call" color="white" size={23} style={{paddingLeft:10,paddingRight:10}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setsettingsModalVisibility(true)}>
                <Icon name="settings-outline" color="white" size={23} style={{paddingLeft:5}}/>
                </TouchableOpacity>
            </View>
           
        {settingsModalVisibility?
        <Modal
        visible={true}
        transparent={true}>
            <TouchableOpacity style={[StyleSheet.modalBackground]} onPress={()=>setsettingsModalVisibility(false)}>
                <View style={{backgroundColor:'white',borderRadius:20,padding:30,marginTop:height/3,marginBottom:height/3}}>
                <FlatList
                        data={settingsItemData}
                        renderItem={({item})=>{
                            return <View style={{width:'100%',alignSelf:'baseline'}}>
                                 <PopupListitem icon={item.icon} title={item.title} />
                                 </View>
                        }}
                       // style={{marginTop:height/2.5}}
                        />
                        </View>
                        </TouchableOpacity>
                </Modal>
                :null
}

        </View>
    )
}

export default ChatTabHeader
