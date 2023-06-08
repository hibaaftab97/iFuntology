import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './styles';
import ScrollWrapper from '../../../components/ScrollWrapper';
import BackgroundBox from '../../../components/BackgroundBox';
import { vh, vw } from '../../../units';
import TextWrapper from '../../../components/TextWrapper';
import CommonButton from '../../../components/Button';
import EnterKits from '../../../components/Modal/EnterKits';
import { getKits } from '../../../utils';

const PackageDetailScreen = props => {

    const [visible, setVisible] = useState(false);
    const [kits, setKits] = useState('No. of Kits');

    const [isSelected, setSelected] = useState(0);
    const [isYearlySelected, setYearlySelected] = useState(0);

    let kitPrice = 4.99;


    const handleModalVisibility = () => {
        setVisible(false);
    };

    useEffect(() => {
        handleModalVisibility();
    }, [kits]);

    const handlePrice = (kitPrice) => {
        if (isSelected == 0) {

            return kits === 'No. of Kits' ? '$4.99' : '$' + (kitPrice * kits).toFixed(2);
        }
        else {
            if (isYearlySelected == 0) {
                return kits === 'No. of Kits' ? '$4.99' : '$' + (kitPrice * kits).toFixed(2);
            }
            else {
                return kits === 'No. of Kits' ? '$4.99' : '$' + (kitPrice * kits * 12).toFixed(2);

            }
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <BackgroundBox bgColor
                backbutton
                onPress={() => props.navigation.pop()}
                headerText="Package Details">



            </BackgroundBox>
            <ScrollWrapper avoidKeyboard={true}
                contentContainerStyle={styles.content}>
                <EnterKits
                    onPress={handleModalVisibility}
                    onKitSelect={(kit) => {
                        setKits(kit);

                    }
                    }
                    kits={getKits()}
                    onHide={handleModalVisibility}
                    visibility={visible}
                />
                <View style={{ paddingHorizontal: 10 * vw }}>

                    <TouchableOpacity style={{ flexDirection: 'row', }}
                        onPress={() => setSelected(0)}>
                        <View style={styles.outer}>
                            {isSelected == 0 ? <View style={styles.inner}>

                            </View> : null}
                        </View>
                        <View style={{ marginLeft: 4 * vw }}>
                            <TextWrapper style={styles.text}>Physical Kit</TextWrapper>
                            <TextWrapper style={styles.value}>(One Time purchase)</TextWrapper>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelected(1)}
                        style={{ flexDirection: 'row', marginTop: 2 * vh }}>
                        <View style={styles.outer}>
                            {isSelected == 1 ? <View style={styles.inner}>

                            </View> : null}
                        </View>
                        <View style={{ marginLeft: 4 * vw }}>
                            <TextWrapper style={styles.text}>Web based subscriptions</TextWrapper>
                            <TextWrapper style={styles.value}>Bi MOnthly or Yearly</TextWrapper>

                        </View>
                    </TouchableOpacity>

                    {isSelected === 1 ? <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 * vh, justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ flexDirection: 'row', }}
                            onPress={() => setYearlySelected(0)}>
                            <View style={styles.outer}>
                                {isYearlySelected == 0 ? <View style={styles.inner}>

                                </View> : null}
                            </View>
                            <View style={{ marginLeft: 4 * vw }}>
                                <TextWrapper style={styles.text}>Monthly</TextWrapper>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setYearlySelected(1);
                            handlePrice(kitPrice);
                        }
                        }
                            style={{ flexDirection: 'row', }}>
                            <View style={styles.outer}>
                                {isYearlySelected == 1 ? <View style={styles.inner}>

                                </View> : null}
                            </View>
                            <View style={{ marginLeft: 4 * vw }}>
                                <TextWrapper style={styles.text}>Yearly</TextWrapper>

                            </View>
                        </TouchableOpacity>
                    </View> : null}

                    <View style={{ flexDirection: 'row', marginTop: 2 * vh, alignItems: 'center' }}>
                        <TextWrapper style={styles.text}>Price:</TextWrapper>
                        <TextWrapper style={styles.value}>  $4.99 (each kit)</TextWrapper>

                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 2 * vh, alignItems: 'center' }}>
                        <TextWrapper style={styles.text}>Total Price:</TextWrapper>
                        <TextWrapper style={styles.value}>  {handlePrice(kitPrice)}</TextWrapper>

                    </View>

                    <TextWrapper style={styles.desc}>*To avail the web based subscription, you need to purchase the physical kit first.</TextWrapper>

                    <TouchableOpacity onPress={() => { setVisible(true) }}
                        style={styles.customStyle}>
                        <TextWrapper style={styles.value}>{kits}</TextWrapper>

                    </TouchableOpacity>
                    <View style={styles.customStyle}>
                        <TextWrapper style={styles.value}>{props.route.params?.course?.coursename}</TextWrapper>

                    </View>
                </View>
                <View style={{ alignItems: 'center', marginTop: 2 * vh }}>
                    <CommonButton text="Buy Now"
                        onPress={() => { props.navigation.navigate("PurchaseOrderScreen") }}
                        colors
                        startColor="#C4A472"
                        endColor="#947037" />
                    <CommonButton text="Click Here"

                        onPress={() => { }}
                    />
                </View>

            </ScrollWrapper>

        </View>
    );
};
export default PackageDetailScreen;
