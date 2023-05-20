import React from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import allImages, { generalImages, icons } from '../../assets/images';
import { vh, vw } from '../../units';
import theme from '../../utils/theme';
import { DrawerActions, useNavigation } from '@react-navigation/native';



const renderHeaderButton = (props, navigation) => {
    if (props.type === 'drawer') {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 2 * vh, paddingHorizontal: 4 * vw }}>

                <TouchableOpacity
                    onPress={() =>
                        navigation.dispatch(DrawerActions.toggleDrawer())}
                    style={styles.drawerButtonView}>
                    <Image source={icons.menu} style={[styles.drawerIconStyle]} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.drawerButtonView}>
                    <Image source={icons.notification} style={[styles.drawerIconStyle]} />
                </TouchableOpacity>
            </View>

        );
    }
};

const BackgroundBox = props => {
    const navigation = useNavigation();

    return (
        <ImageBackground
            style={{
                width: 100 * vw,
            }}
            resizeMode='cover'
            imageStyle={styles.scroll}
            source={allImages.generalImages.background}>

            {renderHeaderButton(props, navigation)}
            <View style={{ alignItems: 'center' }}>

                <Image source={icons.logo}
                    style={styles.image} />
            </View>


            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 4 * vw, paddingBottom: 1 * vh
            }}>
                {props.backbutton ? <TouchableOpacity style={styles.circle}
                    onPress={()=> navigation.pop()}>
                    <Image source={icons.backarrow}
                        style={{ width: 3 * vw, height: 3 * vw, resizeMode: 'contain' }}
                    />
                </TouchableOpacity> : null}
                <View style={{ justifyContent: 'center', alignItems: 'center', width: props.backbutton ? 80 * vw : 90 * vw }}>
                    {props.headerText ? <TextWrapper >{props.headerText}</TextWrapper> : null}

                </View>

            </View>


            <View style={styles.pinkBox} >
                <View style={styles.fieldContainer}>
                    {props?.bgColor ? <ImageBackground
                        style={{ width: 100 * vw,height:100*vh }}
                        imageStyle={{ width: 100 * vw,height:100*vh }}
                        source={generalImages.bgColor}>
                        {props.children}

                    </ImageBackground> : props.children}
                </View>
            </View>

        </ImageBackground>
    );
};

export default BackgroundBox;
