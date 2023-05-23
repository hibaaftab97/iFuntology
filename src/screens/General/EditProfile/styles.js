import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({


  content: {
    // alignItems: 'flex-end',
    // justifyContent:'flex-end'
  },
  buttonContainer: {
    width: vw * 80, height: vh * 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1.5 * vh
  },
  label:{

    color: '#1E2022',
    fontSize:1.7*vh,
    marginTop:2*vh,
    paddingLeft:10*vw,
    fontFamily:Fonts.Gilroy_Medium,
    width: 66 * vw,
  },
  customStyle: {
    width: 20 * vw,
    height: 6 * vh,
    borderColor: theme.textOutline,
    justifyContent:'center',
    borderWidth: 0.3 * vw,
    // flexDirection: 'row',
    borderRadius: 2 * vw,
    marginTop: 1 * vh,
  },

  fieldContainer: {
    backgroundColor: theme.whiteBackground,
    paddingVertical: 5 * vh,
    paddingHorizontal:2*vw,
    alignItems:'center',
    width: 100 * vw,
    borderTopRightRadius: 10 * vw,
    borderTopLeftRadius: 10 * vw,
  },
   scroll: {
    flex: 1,
  },
  box:{
      width:4*vw,
      height:4*vw,
      backgroundColor:theme.textOutline
  }
  
});
export default styles;
