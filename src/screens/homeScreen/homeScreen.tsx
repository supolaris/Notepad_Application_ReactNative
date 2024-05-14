import React, { useEffect, useState, useCallback } from 'react';
import { RefreshControl, View, Text, StyleSheet, ScrollView, Pressable, Image, StatusBar } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import AddLottie from '../../components/lottie/addLottie';

import { NotepadAppColors } from '../../components/colors/notepadColors';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {

    const navigation = useNavigation();

    const [refreshing, setRefreshing] = useState(false);

    const [homeCount, setHomeCount] = useState('');
    const [officeCount, setOfficeCount] = useState('');
    const [workCount, setWorkCount] = useState('');
    const [healthCount, setHealthCount] = useState('');

    useFocusEffect(
        useCallback(() => {

            const getNotesCount = async () => {
                const HomeNotesCount: any = await AsyncStorage.getItem("HomeNotesCount");
                setHomeCount(HomeNotesCount);
    
                const OfficeNotesCount: any = await AsyncStorage.getItem("OfficeNotesCount");
                setOfficeCount(OfficeNotesCount);
    
                const WorkNotesCount: any = await AsyncStorage.getItem("WorkNotesCount");
                setWorkCount(WorkNotesCount);
    
                const HealthNotesCount: any = await AsyncStorage.getItem("HealthNotesCount");
                setHealthCount(HealthNotesCount);
            }

            getNotesCount();

        }, [])
    )

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    const onAddNotesPressed = () => {
        navigation.navigate("AddNotes_Screen");
    }

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <ScrollView
                contentContainerStyle={{ flex: 1 }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <LinearGradient colors={['#fde4f2', '#ffffff', '#ffffff', '#ececec', '#671B61']} style={styles.linearGradient}>

                    <View style={styles.titleCatagoriesView}>
                        <View style={styles.titleView}>
                            <Text style={styles.titleText}>Notes Catagories</Text>
                        </View>

                        <View style={styles.catagoriesView}>
                            <View style={styles.catagoryOneView}>

                                <View>
                                    <Text style={{textAlign: 'center', fontSize: 18, color: 'black', fontWeight: 'bold'}}>{homeCount}</Text>
                                </View>

                                <Pressable
                                    onPress={() => navigation.navigate('DisplayNotes_Screen', { catagoryName: 'HomeNotes' })}>
                                    <View style={styles.imageView}>
                                        <Image
                                            style={[styles.image, { marginBottom: 2 }]}
                                            source={require('../../../assets/images/houseCatagory.png')} />
                                    </View>
                                    <View style={styles.catgoriesTitleView}>
                                        <Text style={[styles.catagoriesTitleText, { borderBottomRightRadius: 20 }]}>Home</Text>
                                    </View>
                                </Pressable>

                            </View>

                            <View style={styles.catagoryTwoView}>

                            <View>
                                    <Text style={{textAlign: 'center', fontSize: 18, color: 'black', fontWeight: 'bold'}}>{officeCount}</Text>
                                </View>

                                <Pressable
                                    onPress={() => navigation.navigate('DisplayNotes_Screen', { catagoryName: 'OfficeNotes' })}>
                                    <View style={styles.imageView}>
                                        <Image
                                            style={styles.image}
                                            source={require('../../../assets/images/officeCatagory.png')} />
                                    </View>
                                    <View style={styles.catgoriesTitleView}>
                                        <Text style={[styles.catagoriesTitleText, { borderBottomLeftRadius: 20 }]}>Office</Text>
                                    </View>
                                </Pressable>
                            </View>

                        </View>

                        <View style={styles.catagoriesView}>
                            <View style={styles.catagoryThreeView}>

                                <Pressable
                                    onPress={() => navigation.navigate('DisplayNotes_Screen', { catagoryName: 'WorkNotes' })}>
                                    <View style={styles.catgoriesTitleView}>
                                        <Text style={[styles.catagoriesTitleText, { borderTopRightRadius: 20 }]}>Work</Text>
                                    </View>
                                    <View style={styles.imageView}>
                                        <Image
                                            style={styles.image}
                                            source={require('../../../assets/images/workCatagory.png')} />
                                    </View>
                                </Pressable>
                                <View>
                                    <Text style={{textAlign: 'center', fontSize: 18, color: 'black', fontWeight: 'bold'}}>{workCount}</Text>
                                </View>


                            </View>

                            <View style={styles.catagoryFourView}>

                                
                                <Pressable
                                    onPress={() => navigation.navigate('DisplayNotes_Screen', { catagoryName: 'HealthNotes' })}>
                                    <View style={styles.catgoriesTitleView}>

                                        <Text style={[styles.catagoriesTitleText, { borderTopLeftRadius: 20 }]}>Health</Text>
                                    </View>
                                    <View style={styles.imageView}>
                                        <Image
                                            style={[styles.image]}
                                            source={require('../../../assets/images/healthCatagory.png')} />
                                    </View>
                                </Pressable>

                                <View>
                                    <Text style={{textAlign: 'center', fontSize: 18, color: 'black', fontWeight: 'bold'}}>{healthCount}</Text>
                                </View>

                            </View>

                        </View>

                    </View>

                    <View style={styles.lottieTextView}>
                        <Pressable
                            onPress={onAddNotesPressed}
                            style={styles.pressable}>
                            <AddLottie />
                        </Pressable>
                        <Text style={styles.addNotesText}>Add notes</Text>
                    </View>

                </LinearGradient>
            </ScrollView>

        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        flex: 1
    },
    titleCatagoriesView: {
        paddingTop: 30,
        justifyContent: 'center'
    },
    titleView: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: NotepadAppColors.black
    },
    catagoriesView: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10
    },
    catagoryOneView: {
        marginHorizontal: 30,
        borderWidth: 0.9,
        borderBottomRightRadius: 20
    },
    catagoryTwoView: {
        marginHorizontal: 30,
        borderWidth: 0.9,
        borderBottomLeftRadius: 20,
    },
    catagoryThreeView: {
        marginHorizontal: 30,
        borderWidth: 0.9,
        borderTopRightRadius: 20
    },
    catagoryFourView: {
        marginHorizontal: 30,
        borderWidth: 0.9,
        borderTopLeftRadius: 20
    },
    imageView: {
        paddingHorizontal: 10,
        paddingTop: 20
    },
    image: {
        height: 150,
        width: 150
    },
    catgoriesTitleView: {

    },
    catagoriesTitleText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: NotepadAppColors.white,
        backgroundColor: NotepadAppColors.lightBlue,
        textAlign: 'center'
    },

    lottieTextView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
    },
    pressable: {

    },
    addNotesText: {
        fontSize: 30,
        color: NotepadAppColors.white
    },

})