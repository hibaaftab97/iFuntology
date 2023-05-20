import {StyleSheet} from 'react-native';
import { Fonts } from '../../assets/fonts';
// import {Fonts} from '../../../assets/fonts/index';
import {vw, vh} from '../../units/index';
import theme from '../../utils/theme';

export default style = StyleSheet.create({
    
    scroll: {
        flex: 1,
      },
      fieldContainer: {
        backgroundColor: theme.whiteBackground,
        paddingVertical: 5 * vh,
        paddingHorizontal:2*vw,
        marginTop:0.5*vh,
        width: 100 * vw,
        borderTopRightRadius: 10 * vw,
        borderTopLeftRadius: 10 * vw,
        height:100*vh,

      },
      pdfContainer:{
        width:80*vw,
        marginTop:2*vh,
        backgroundColor:'white',
        paddingVertical:vh,
        paddingHorizontal:4*vw,
        elevation:vh,
        borderRadius:1.5*vh
    },
      pinkBox:{
        width: 40 * vw,
       
        backgroundColor:theme.primary,
        height: 22 * vh, borderRadius: 6 * vw,
      },
      text:{
        fontFamily:Fonts.Gilroy_Bold,
        textAlign:'center',paddingBottom:2*vh
      }
});
