import React, { useState ,useEffect} from 'react';
import { View, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './styles';
import ScrollWrapper from '../../../components/ScrollWrapper';
import BackgroundBox from '../../../components/BackgroundBox';
import { vh, vw } from '../../../units';
import TextWrapper from '../../../components/TextWrapper';
import CommonButton from '../../../components/Button';
import EnterKits from '../../../components/Modal/EnterKits';

const PackageDetailScreen = props => {

    const [visible, setVisible] = useState(false);
    const [kits, setKits] = useState('No. of Kits');

    const [isSelected, setSelected] = useState(0);


    const handleModalVisibility = () => {
        setVisible(false);
    };

    useEffect(() => {
        handleModalVisibility();
     }, [kits]);
    return (
        <ScrollWrapper avoidKeyboard={true}
            contentContainerStyle={styles.content}>
            <EnterKits
                onPress={handleModalVisibility}
                onKitSelect={(kit) => {
                    setKits(kit);
                    
                }
                }
                onHide={handleModalVisibility}
                visibility={visible}
            />
            <BackgroundBox bgColor
                backbutton
                onPress={() => props.navigation.pop()}
                headerText="Package Details">

                <View style={{ paddingHorizontal: 10 * vw }}>

                    <TouchableOpacity style={{ flexDirection: 'row', }}
                    onPress={()=> setSelected(0)}>
                        <View style={styles.outer}>
                            {isSelected==0?<View style={styles.inner}>

                            </View>:null}
                        </View>
                        <View style={{ marginLeft: 4 * vw }}>
                            <TextWrapper style={styles.text}>Physical Kit</TextWrapper>
                            <TextWrapper style={styles.value}>(One Time purchase)</TextWrapper>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> setSelected(1)}
                    style={{ flexDirection: 'row', marginTop: 2 * vh }}>
                        <View style={styles.outer}>
                            {isSelected==1?<View style={styles.inner}>

                            </View>:null}
                        </View>
                        <View style={{ marginLeft: 4 * vw }}>
                            <TextWrapper style={styles.text}>Web based subscriptions</TextWrapper>
                            <TextWrapper style={styles.value}>Bi MOnthly or Yearly</TextWrapper>

                        </View>
                    </TouchableOpacity>

                    <View   style={{flexDirection:'row',marginTop:2*vh,alignItems:'center'}}>
                    <TextWrapper style={styles.text}>Price:</TextWrapper>
                    <TextWrapper style={styles.value}>  $394</TextWrapper>

                    </View>
                    <View   style={{flexDirection:'row',marginTop:2*vh,alignItems:'center'}}>
                    <TextWrapper style={styles.text}>Total Price:</TextWrapper>
                    <TextWrapper style={styles.value}>  {kits==='No. of Kits'?'$394':394*kits}</TextWrapper>

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
                    onPress={() => { props.navigation.navigate("PurchaseOrderScreen")}}
                        colors
                        startColor="#C4A472"
                        endColor="#947037" />
                    <CommonButton text="Click Here"

                        onPress={() => { }}
                    />
                </View>

            </BackgroundBox>


        </ScrollWrapper>


    );
};
export default PackageDetailScreen;
