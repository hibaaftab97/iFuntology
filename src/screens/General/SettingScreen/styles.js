import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({


  content: {
    alignItems:'center'
    // justifyContent:'flex-end'
  },
  label:{
    fontSize:1.7*vh,
    color:theme.black,
    fontFamily:Fonts.Gilroy_Medium
 },
 value:{
  fontSize:2*vh,
  color:theme.primary,
  fontFamily:Fonts.Gilroy_Bold,
},
divider:{
  borderBottomColor: '#474747',
  opacity: 0.23,
  marginTop: 4 * vh,
  borderBottomWidth: 0.1 * vh,
}
});
export default styles;
