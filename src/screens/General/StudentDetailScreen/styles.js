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
coursedetail:{
  fontSize:2*vh,
  marginTop:2*vh,
  color:theme.black,
  fontFamily:Fonts.Gilroy_Medium
},
});
export default styles;
