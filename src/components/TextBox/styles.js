import {StyleSheet} from 'react-native';
import { Fonts } from '../../assets/fonts';
// import {Fonts} from '../../../assets/fonts/index';
import {vw, vh} from '../../units/index';
import theme from '../../utils/theme';

export default style = StyleSheet.create({
    
    boxContainer: {
        width:38*vw,height:18*vh,borderColor:"#002373",borderWidth:0.3*vh,borderRadius:6*vw,
        alignItems:'center',justifyContent:'space-evenly'
      }, 
      buttontext:{
          fontFamily:Fonts.Gilroy_Bold,
          color:theme.black,
          fontSize:2*vh
      }
});
