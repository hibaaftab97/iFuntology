import { StyleSheet } from 'react-native'
import {vh,vw} from '../../../units'
import { Fonts } from '../../../assets/fonts';
import theme from '../../../utils/theme';
export default styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    scrollArea: {
        width: '100%',
    },
    MainContent: {
        padding: 4 * vw,
    },
    MainHeading: {
        fontFamily: Fonts.Gilroy_Medium,
        color: '#EE3048',
        fontSize: 5 * vw,
        paddingBottom: 1 * vh,
        textAlign: 'center',
    },
    box:{
        width:4*vw,
        height:4*vw,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:theme.textOutline
    },
    MainBox: {
        // padding: 3 * vw,
        backgroundColor: '#FFF',
        width: '100%',
        // flexDirection: 'row',
        // justifyContent: 'space-around',
        // marginBottom: 2 * vh,
        // elevation: 3,
        // flexWrap: "wrap"
    },
    MainBoxCol: {
        flexDirection: 'column',
    },
    txt1: {
        // width: 65 * vw,
        fontFamily: Fonts.Gilroy_Bold,
        color: '#EE3048',
        fontSize: 5 * vw,
        textDecorationLine:'underline',
        padding: 0,
    },
    txt2: { 
        fontFamily: Fonts.Gilroy_Bold,
        color: '#666666',
        fontSize: 3 * vw,
        marginVertical: 1*vh,
        padding: 0,
    },
    txt3: {
        fontFamily: Fonts.Gilroy_Bold,
        color: '#666666' ,
        fontSize: 3.5 * vw,
        marginVertical: 2*vh,
        marginBottom: 3*vh, 
    },
    txt4: {
        fontFamily: Fonts.Gilroy_Bold,
        color: '#666666',
        fontSize: 3.5 * vw,
        marginTop: -0.8 * vh,
        padding: 0,
        textAlign: 'right',
    },
})