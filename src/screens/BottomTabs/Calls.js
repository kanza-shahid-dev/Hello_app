import React,{useState,useEffect} from 'react'
import { View, Text,Image,Modal, FlatList, TouchableOpacity } from 'react-native'
import CallHistoryListitem from '../../components/CallHistoryListitem'
import CallHistoryModal from '../../components/CallHistoryModal'
import TabScreen from '../../components/TabScreen'
import colors from '../../constants/colors'
import Icon from 'react-native-vector-icons/AntDesign'
import { width, height} from '../../constants/ScreenSize'
import StyleSheet from '../../constants/StyleSheet'
const Calls = () => {
    const [callHistoryModalVisi,setCallHistoryModalVisi]=useState(false)
    const [historyOfId,setHistoryOfId]=useState(null)
    const[DATA,SetDATA]=useState([])
    const[historyData,setHistoryData]=useState([])

    useEffect(()=>{
        SetDATA(data)
    },[])

    const data=[
        {
            userName:'Jessica',isOnline:true,time:'2 hours',type:'call',image:require('../../assets/images/user.png')
        },
        {
            userName:'Jessica',isOnline:false,time:'2 hours',type:'video',image:require('../../assets/images/user.png')
        },
        {
            userName:'Jessica',isOnline:true,time:'2 hours',type:'video',image:require('../../assets/images/user.png')
        },
        {
            userName:'Jessica',isOnline:false,time:'2 hours',type:'video',image:require('../../assets/images/user.png')
        },
        {
            userName:'Jessica',isOnline:false,time:'2 hours',type:'video',image:require('../../assets/images/user.png')
        },
        {
            userName:'Jessica',isOnline:true,time:'2 hours',type:'video',image:require('../../assets/images/user.png')
        },
        {
            userName:'Jessica',isOnline:false,time:'2 hours',type:'video',image:require('../../assets/images/user.png')
        },
    ]
    const HistoryOfPerson=[
        {
            userid:0,
            callLOG:[
                {
                    id:1,userName:'Alina',isOnline:true,time:'2 hours',type:'call',image:require('../../assets/images/user.png'),
                },
                {
                    id:2,userName:'Umer',isOnline:true,time:'2 hours',type:'call',image:require('../../assets/images/user.png'),
                },
            ]
        },
        {
            userid:1,
            callLOG:[
                {
                    id:3,userName:'Ayesha',isOnline:false,time:'5 hours',type:'call',image:require('../../assets/images/user.png'),
                },
            ]
        },
       
    ]
   function searchCalls()
   {

   }
    return (
        <TabScreen title={"CALL \nHISTORY"} >

            <View style={{paddingLeft:5}}>
            <FlatList
            data={DATA}
           // keyExtractor={(index)=>index.toString()}
            renderItem={({item,index})=>{
                return <TouchableOpacity onPress={()=>{ setHistoryOfId(index)
                                                       setCallHistoryModalVisi(true)}}>
                <CallHistoryListitem data={item}/>
             
                </TouchableOpacity>
            }}
            />
            </View>
          
            {callHistoryModalVisi 
            ?
            <CallHistoryModal id={historyOfId} visibility={callHistoryModalVisi}  onPress={()=>setCallHistoryModalVisi(false)} />
            :null
             }

        </TabScreen>
    )
}

export default Calls
