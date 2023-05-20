import {StyleSheet} from 'react-native';
import { Fonts } from '../../assets/fonts';
// import {Fonts} from '../../../assets/fonts/index';
import {vw, vh} from '../../units/index';
import theme from '../../utils/theme';

export default style = StyleSheet.create({
    
    scroll: {
        flex: 1,
      },
    
      image:{
          resizeMode:'contain',
          width:40*vw,
          height:20*vh
      },
      circle:{
        width:16*vw,
        alignItems:'center',
        justifyContent:'center',
        height:16*vw,
        borderRadius:8*vw,
        backgroundColor:theme.yellow
      }
});
