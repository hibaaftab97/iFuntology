import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({


    content: {
        // justifyContent:'flex-end'
        // flex:1
    },
    text: {
        color: theme.black,
        fontSize: 2 * vh
    },
    value: {
        color: theme.lightgrey,
        fontSize: 1.7 * vh
    },
    outer: {
        width: 4 * vw, height: 4 * vw, borderRadius: 2 * vw, borderColor: theme.lightgrey, borderWidth: 0.3 * vh, alignItems: 'center', justifyContent: 'center'
    },
    inner: {
        width: 2 * vw, height: 2 * vw, borderRadius: 1 * vw, backgroundColor: theme.blue
    },
    desc: {
        color: theme.error,
        marginTop: 2 * vh,
        fontSize: 1.7 * vh
    },
    customStyle: {
        width:90*vw,
        backgroundColor:'white',
        paddingVertical:vh,
        paddingHorizontal:2*vw,
        elevation:vh,
        borderRadius:1.5*vh,
        justifyContent:'center'
    },


});
export default styles;
