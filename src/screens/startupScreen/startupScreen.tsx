import React from 'react';
import { View, Text, StyleSheet, Pressable, StatusBar } from 'react-native';
import { NotepadAppColors } from '../../components/colors/notepadColors';

import LinearGradient from 'react-native-linear-gradient';

import StartupLottie from '../../components/lottie/startupLottie';
import ArrowIcon from 'react-native-vector-icons/FontAwesome6';

import { useNavigation } from '@react-navigation/native';

const StartupScreen = () => {

    const navigation = useNavigation();

    const onGetStartedPressed = () => {
        navigation.navigate('Home_Screen');
    }

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <LinearGradient colors={['#ffffff', '#ffffff', '#ffffff', '#ececec', '#ececec']} style={styles.linearGradient}>

                <View style={styles.lottieView}>
                    <StartupLottie />
                </View>

                <View style={styles.titleDescriptionButtonView}>

                    <Text style={styles.titleText}>Write Down your day</Text>
                    <Text style={styles.title2Text}>And make it a good <Text style={{ color: NotepadAppColors.red }}>Memory</Text></Text>

                    <View style={styles.descriptionView}>
                        <Text style={styles.descriptionText}>In our app, every information that you write down about your life, is encrypted. Here is a local safe to keep your notes and memories always in hand</Text>
                        <Text style={styles.description2Text}>Always with you</Text>
                    </View>

                    <View style={styles.pressableView}>
                        <Pressable
                            onPress={onGetStartedPressed}
                            style={styles.pressable}>

                            <View style={styles.pressableTextView}>
                                <Text style={styles.pressableText}>Get started</Text>
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

export default StartupScreen;
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