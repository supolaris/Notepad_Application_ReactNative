import React from 'react';
import { View, Text, StyleSheet, Pressable, StatusBar } from 'react-native';
import { NotepadAppColors } from '../colors/NotepadColors';

import LinearGradient from 'react-native-linear-gradient';

import StartupLottie from '../lottie/StartupLottie';
import ArrowIcon from 'react-native-vector-icons/FontAwesome6';

const StartupScreenUi = (props) => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <LinearGradient colors={['#ffffff', '#ffffff', '#ffffff', '#ececec', '#ececec']} style={styles.linearGradient}>

                <View style={styles.lottieView}>
                    <StartupLottie />
                </View>

                <View style={styles.titleDescriptionButtonView}>

                    <Text style={styles.titleText}>{props.title}</Text>
                    <Text style={styles.title2Text}>{props.title2}<Text style={{ color: NotepadAppColors.red }}>{props.title2Word}</Text></Text>

                    <View style={styles.descriptionView}>
                        <Text style={styles.descriptionText}>{props.description}</Text>
                        <Text style={styles.description2Text}>{props.belowDescription}</Text>
                    </View>

                    <View style={styles.pressableView}>
                        <Pressable
                            onPress={props.onPress}
                            style={styles.pressable}>

                            <View style={styles.pressableTextView}>
                                <Text style={styles.pressableText}>{props.buttonText}</Text>
                            </View>

                            <View style={styles.iconView}>
                                <ArrowIcon
                                    name="arrow-right-long"
                                    size={20}
                                    color={NotepadAppColors.white}
                                />
                            </View>
                        </Pressable>
                    </View>

                </View>
            </LinearGradient>

        </View>
    )
}

export default StartupScreenUi;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: NotepadAppColors.white

    },
    linearGradient: {
        flex: 1

    },
    lottieView: {
        flex: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60
    },
    titleDescriptionButtonView: {
        flex: 1.5,
        alignItems: 'center'

    },
    titleText: {
        fontSize: 35,
        color: NotepadAppColors.darkGray,
        fontWeight: 'bold'

    },
    title2Text: {
        fontSize: 20,
        color: NotepadAppColors.darkGray,
        fontWeight: 'bold'

    },
    descriptionView: {
        paddingTop: 50,
        width: '85%',

    },
    descriptionText: {
        fontSize: 18,
        textAlign: 'center',
        color: NotepadAppColors.darkGray

    },
    description2Text: {
        fontSize: 18,
        textAlign: 'center',
        color: NotepadAppColors.red

    },
    pressableView: {
        marginTop: 40,

    },
    pressable: {
        paddingHorizontal: 50,
        paddingVertical: 10,
        flexDirection: 'row',
        backgroundColor: NotepadAppColors.lightBlue,
        borderRadius: 10

    },
    pressableTextView: {

    },
    pressableText: {
        color: NotepadAppColors.white,
        fontSize: 25,
        fontWeight: 'bold'

    },
    iconView: {
        justifyContent: 'center',
        paddingLeft: 10

    },
})