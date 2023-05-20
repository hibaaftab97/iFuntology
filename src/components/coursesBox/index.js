import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import allImages, { generalImages, icons } from '../../assets/images';
import { vh, vw } from '../../units';
import theme from '../../utils/theme';
import {
    rrect,
    rect, Canvas, useImage, Image, BlurMask, Group
} from "@shopify/react-native-skia";

const CoursesBox = props => {

    const size = 40 * vw;
    const padding = 0.1 * vh;
    const r = 20;

    const roundedRect = rrect(
        rect(padding, padding, size - padding * 2, size - padding * 2),
        r,
        r
    );
    return (
        <TouchableOpacity   
        onPress={props.onPress}
        style={{marginLeft:0*vw,paddingHorizontal:3*vw,marginTop:2*vh}}>
        <View style={[styles.pinkBox,{backgroundColor:props?.item?.bg}]}>

            <Canvas style={{ flex: 1, alignItems: 'center' }}>
                <Group
                    clip={roundedRect}
                >
                    <Image
                        width={40 * vw}
                        x={0}
                        y={0}
                        height={15 * vh}
                        image={useImage(props?.item?.image)}
                        fit="cover"
                    >
                        <BlurMask blur={8} style='normal'
                        />
                    </Image>
                </Group>
            </Canvas>

            <TextWrapper style={styles.text}>{props?.item?.coursename}</TextWrapper>
        </View>
        </TouchableOpacity>
    );
};

export default CoursesBox;
