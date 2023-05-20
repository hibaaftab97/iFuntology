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
        // paddingHorizontal:2*vw,
        marginTop:0.5*vh,
        width: 100 * vw,
        borderTopRightRadius: 10 * vw,
        borderTopLeftRadius: 10 * vw,
        height:100*vh,

      },
      pinkBox:{
        backgroundColor: theme.primary,
        paddingVertical: 1 * vh,
        paddingHorizontal: 2 * vw,
        marginTop:1*vh,
        alignItems: 'center',
        height:100*vh,
        width: 100 * vw,
        borderTopRightRadius: 10 * vw,
        borderTopLeftRadius: 10 * vw,
      },
      image:{
          resizeMode:'contain',
          width:40*vw,
          height:20*vh
      },
      circle:{
        width:8*vw,
        alignItems:'center',
        justifyContent:'center',
        height:8*vw,
        borderRadius:4*vw,
        backgroundColor:theme.yellow
      }
});
