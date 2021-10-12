import React,{useState,useEffect} from 'react'
import { View, Text, Modal, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { width, height} from '../constants/ScreenSize'
import StyleSheet from '../constants/StyleSheet'
import CallHistoryListitem from './CallHistoryListitem'

const CallHistoryModal = (props) => {
    const [callHistoryModalVisi,setCallHistoryModalVisi]=useState(true)
    const[data,SetDATA]=useState([])
    const id=props.id;

    useEffect(()=>{
    console.log("9999",id,callHistoryModalVisi)
        const user=HistoryOfPerson.filter(item=>item.userid==id)
        const userData=user[0].callLOG
        SetDATA(userData)
        setCallHistoryModalVisi(true)
    },[])


    const HistoryOfPerson=[
        {
            userid:0,
            callLOG:[
                {
                    id:1,userName:'Alina',isOnline:true,time:'2 hours',type:'call',image:require('../assets/images/user.png'),
                },
                {
                    id:2,userName:'Umer',isOnline:true,time:'2 hours',type:'call',image:require('../assets/images/user.png'),
                },
            ]
        },
        {
            userid:1,
            callLOG:[
                {
                    id:3,userName:'Ayesha',isOnline:false,time:'5 hours',type:'call',image:require('../assets/images/user.png'),
                },
                {
                    id:3,userName:'Aiza',isOnline:false,time:'5 hours',type:'call',image:require('../assets/images/user.png'),
                },
                {
                    id:3,userName:'Bisma',isOnline:false,time:'5 hours',type:'call',image:require('../assets/images/user.png'),
                },
                {
                    id:3,userName:'Sarah',isOnline:false,time:'5 hours',type:'call',image:require('../assets/images/user.png'),
                },
                {
                    id:3,userName:'Zobia',isOnline:false,time:'5 hours',type:'call',image:require('../assets/images/user.png'),
                },
            ]
        },
       
    ]
    return (
        <Modal
        visible={props.visibility}
        transparent={true}>
                 <View style={StyleSheet.modalBackground}>
                <View style={StyleSheet.modalContainer}>
                            <View style={{flexDirection:'row',alignItems:'center',paddingLeft:15,paddingRight:15,paddingTop:15}}>
                                <View style={{flex:1}}>
                                <Text style={StyleSheet.heading3}>Call History</Text>
                                </View>
                                <TouchableOpacity onPress={props.onPress}>
                                <Icon name="close" size={20} color="black"/>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                        data={data}
                        renderItem={({item})=>{
                            return <CallHistoryListitem data={item}/>
                        }}
                        />
                </View>
                </View>
        </Modal>

    )
}

export default CallHistoryModal
