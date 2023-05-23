import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({


    content: {
        // justifyContent:'flex-end'
    },
    text: {
        color: theme.blue,
        fontSize: 2 * vh
    },
    value: {
        color: theme.lightgrey,
        fontSize: 1.7 * vh
    },
    outer: {
        width: 6 * vw, height: 6 * vw, borderRadius: 3 * vw, borderColor: theme.lightgrey, borderWidth: 0.3 * vh, alignItems: 'center', justifyContent: 'center'
    },
    inner: {
        width: 3 * vw, height: 3 * vw, borderRadius: 1.5 * vw, backgroundColor: theme.blue
    },
    desc: {
        color: theme.error,
        marginTop: 2 * vh,
        fontSize: 1.7 * vh
    },
    customStyle: {
        width: 80 * vw,
        borderColor: theme.textOutline,
        borderWidth: 0.3 * vw,
        padding: 2 * vh,

        borderRadius: 2 * vw,
        marginTop: 1 * vh,
    },


});
export default styles;
