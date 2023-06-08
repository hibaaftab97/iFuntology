import { StyleSheet } from 'react-native';
import { Fonts } from '../../assets/fonts';
// import {Fonts} from '../../../assets/fonts/index';
import { vw, vh } from '../../units/index';
import theme from '../../utils/theme';

export default style = StyleSheet.create({

  scroll: {
    width: 100 * vw,

  },
  container: {
    position: 'relative'
  },
  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  fieldContainer: {
    backgroundColor: theme.whiteBackground,
    paddingVertical: 5 * vh,
    // paddingHorizontal:2*vw,
    // marginTop:0.5*vh,
    width: 100 * vw,
    marginTop: 1 * vh,
    borderTopRightRadius: 12 * vw,
    borderTopLeftRadius: 12 * vw,
    borderTopColor: theme.primary,
 
    borderTopWidth: 2 * vh
  },
  drawerIconStyle: {
    resizeMode: 'contain',
    height: 6 * vw,
    width: 6 * vw,
  },

  drawerButtonView: {
    justifyContent: 'center',
  },
  pinkBox: {
    backgroundColor: theme.primary,
    paddingVertical: 1 * vh,
    paddingHorizontal: 2 * vw,
    alignItems: 'center',
    width: 100 * vw,
    borderTopRightRadius: 10 * vw,
    borderTopLeftRadius: 10 * vw,
  },
  image: {
    resizeMode: 'contain',
    width: 40 * vw,
    height: 20 * vh
  },
  circle: {
    width: 8 * vw,
    alignItems: 'center',
    justifyContent: 'center',
    height: 8 * vw,
    borderRadius: 4 * vw,
    backgroundColor: theme.yellow
  }
});
