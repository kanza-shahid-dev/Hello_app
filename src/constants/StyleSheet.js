import colors from "./colors";
import {Dimensions} from 'react-native'

//import {height,width} from '../constants/ScreenSize'
const {width,height}=Dimensions.get('window')

export default {

    //screen continer
    ScrollViewContentStyle:{
        flexGrow:1,
        backgroundColor:'white'
    },
    ScreenContainer:{
        flex:1,
        backgroundColor:'white',
        margin:width/11,
        textAlign:'center',
        alignItems:'center'
    },

    //Fonts
    heading1:{
        fontSize:width/13,
        color:colors.black,
    },
    heading2:{
        fontSize:width/15,
        color:colors.black,
    },
    heading3:{
        fontSize:width/19,
        color:colors.black,
    },

    TabHeaderHeading:{
        fontSize:width/65+12,
        color:'white',
        fontWeight:'bold',
    },
    text1:{
        fontSize:width/21,
        color:'#707070',
        textAlign:'center'
    },
    text2:{
        fontSize:14,
        color:'grey',
    },
    descriptionText:{
        fontSize:width/28,
        color:'#707070',
    },
    primaryButtonText:{
        fontSize:16,
        color:'white',
        textAlign:'center'
    },
    InputFieldText:{
        fontSize:16,
        borderWidth:1,
        borderRadius:9,
        paddingLeft:20,
    },
    DescriptionInputFieldText:{
        fontSize:16,
        borderWidth:1,
        borderRadius:9,
        paddingLeft:20,
        paddingTop:15,
        height:140,
        textAlignVertical: 'top'
    },
    SearchBarInput:{
        fontSize:21,
        paddingLeft:10,
    },
    bottomSheetHeading:{
        fontSize:20,
        fontWeight:'800',
        padding:15
    },
    bottomSheetText:
    {
        fontSize:19,
        margin:13
    },
    error:{
        color:'red'
    },

    //compontents
    TabHeaderStyle:{
        backgroundColor:colors.primary,
        flexDirection:'row',
        alignItems:'center',
        padding:12,
        borderBottomLeftRadius:30,
        borderBottomEndRadius:30
    },
    SearchBar:{
        borderRadius:30,
        backgroundColor:'white',
        paddingLeft:20,
        height:45,
        marginLeft:20,
        marginRight:20,
        flexDirection:'row',
        alignItems:'center',
    },

    modalBackground:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalContainer:{
        backgroundColor:'white',
        borderRadius:25,
        width:width*0.9,
        height:height*0.6
    },
    settingsModalContainer:{
        backgroundColor:'white',
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        marginTop:'50%',
        marginBottom:'50%'
    }
    
   


}