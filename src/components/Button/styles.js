import {StyleSheet} from 'react-native';
import { Fonts } from '../../assets/fonts';
// import {Fonts} from '../../../assets/fonts/index';
import {vw, vh} from '../../units/index';
import theme from '../../utils/theme';

export default style = StyleSheet.create({
    
    buttonContainer: {
        width: vw * 80, height: vh * 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1.5 * vh,
        marginTop:2*vh
      }, 
      buttontext:{
          fontFamily:Fonts.Gilroy_Medium,
          color:theme.whiteBackground,
          padding:0
      }
});
