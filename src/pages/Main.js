import React, { useRef, useState } from 'react';
import { 
    View,
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { Animated } from 'react-native';

import Lottie from 'lottie-react-native';
import animtionJSON from '../animations/payments.json';

export const Main = () => {
    const headingAnimatedValue = useRef(new Animated.Value(300)).current;
    const [valueMoney, setMoney] = useState(null);
    const [isFocus, setFocus] = useState(false);

    const startingAnimation = () => {
        setFocus(true);

        Animated.spring(headingAnimatedValue, {
            toValue: 150,
            bounciness: 15,
            useNativeDriver: false,
        }).start();
    };

    const stopAnimation = () => {
        setFocus(false);

        Animated.spring(headingAnimatedValue, {
            toValue: 300,
            bounciness: 15,
            useNativeDriver: false,
        }).start();
    };

    return (
        <View style={styles.container}>
            <Animated.View
                style={[styles.containerHeader, {
                    height: headingAnimatedValue,
                }]}
            >
                <View>
                    <Text style={styles.title}>
                        Faça sua doação
                    </Text>

                    <Text style={styles.subTitle}>
                        faça sua doação de forma 
                        {'\n'}
                        segura com PodPay
                    </Text>
                </View>

                <Lottie 
                    source={animtionJSON}
                    autoPlay
                    loop
                    style={{
                        height: 150,
                        width: 150,
                        marginTop: 25,
                    }}
                />
            </Animated.View>

            <View style={styles.contentForm}>
                <TextInput 
                    placeholder='Valor'
                    keyboardType='numeric'
                    style={[styles.input, {
                        borderColor: isFocus ? '#1e90ff' : '#d3d3d3'
                    }]}
                    onFocus={() => startingAnimation()}
                    onBlur={() => stopAnimation()}
                    onChangeText={text => setMoney(text)}
                />

                <TouchableOpacity
                    style={[styles.button, {
                        backgroundColor: valueMoney ? '#2e8b57' : '#d3d3d3' 
                    }]}
                    disabled={!valueMoney}
                >
                    <Text
                        style={styles.buttonName}
                    >
                        Pagar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerHeader: {
        height: 300,
        backgroundColor: '#2e8b57',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
    },
    containerSvg: {
        position: 'absolute',
        bottom: -160,
    },
    button: {
        height: 45,
        width: 280,
        backgroundColor: '#2e8b57',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonName: {
        color: '#FFFFFF',
        fontFamily: 'Roboto_400Regular',
    },
    contentForm: {
        justifyContent: 'center',
        alignItems: 'center',

        margin: 100,
    },
    input: {
        borderColor: '#d3d3d3',
        borderWidth: 1,
        width: 280,
        height: 45,
        borderRadius: 4,
        padding: 10,
        fontFamily: 'Roboto_700Bold',
        color: '#2f4f4f',
    },
    title: {
        color: '#FFFFFF',
        marginTop: 40,
        fontFamily: 'Roboto_900Black',
        fontSize: 20,
    },
    subTitle: {
        color: '#FFFFFF',
        fontFamily: 'Roboto_300Light',
        marginTop: 10,
    }
})