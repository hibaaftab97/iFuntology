import {StyleSheet} from 'react-native';
import { Fonts } from '../../assets/fonts';
// import {Fonts} from '../../../assets/fonts/index';
import {vw, vh} from '../../units/index';
import theme from '../../utils/theme';

export default style = StyleSheet.create({
    
    scroll: {
        flex: 1,
      },
      buttonContainer: {
        width: vw * 80, height: vh * 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1.5 * vh
      },
      text: {
        color: theme.black,
        fontSize: 2 * vh,
        marginLeft:2*vw
    },
    customStyle: {
      width:90*vw,
      backgroundColor:'white',
      paddingVertical:vh,
      paddingHorizontal:2*vw,
      elevation:vh,
      borderRadius:1.5*vh,
      marginTop:2*vh,
      justifyContent:'center'
  },
  outer: {
    width: 4 * vw, height: 4 * vw, borderRadius: 2 * vw, borderColor: theme.lightgrey, borderWidth: 0.3 * vh, alignItems: 'center', justifyContent: 'center'
},
inner: {
    width: 2 * vw, height: 2 * vw, borderRadius: 1 * vw, backgroundColor: theme.blue
},
     label:{
        fontSize:1.5*vh,
        color:theme.lightgrey,
        fontFamily:Fonts.Gilroy_Medium
     },
    
      box:{
        width: 80 * vw, borderColor: "#B73EFF",
        borderRadius: 1.5*vh, paddingVertical: 4*vh,
        paddingHorizontal:3*vw,
        borderWidth: 0.5 * vw,
        marginTop:2*vh
      },
      value:{
        fontSize:1.5*vh,
        color:theme.blue,
        fontFamily:Fonts.Gilroy_Bold,
        width:30*vw,
     },
     viewDetails:{
      fontSize:1.5*vh,
      color:'#626262',
      fontFamily:Fonts.Gilroy_Medium
    },
    
      row:{
        width: 30 * vw, 
        alignItems:'center',
        borderColor: "#626262",
        borderRadius: 1.5*vh, paddingVertical: 1* vh,
        borderWidth: 0.5 * vw
      }
});
