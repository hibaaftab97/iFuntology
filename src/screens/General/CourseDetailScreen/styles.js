import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({


  content: {
    // justifyContent:'flex-end'
    backgroundColor:'red',
  },
  buttonContainer: {
    width: vw * 80, height: vh * 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1.5 * vh
  },
 courseName:{
    fontSize:2.5*vh,
    color:theme.textOutline,
    fontFamily:Fonts.Gilroy_Bold
 },
   scroll: {
    flex: 1,
  },
 courseText:{
    fontSize: 1.7 * vh,
    color: theme.black,
 },

  
});
export default styles;
