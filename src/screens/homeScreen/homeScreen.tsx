import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Image } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import AddLottie from '../../components/lottie/addLottie';

import { NotepadAppColors } from '../../components/colors/notepadColors';

import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {

    const navigation = useNavigation();

    const onAddNotesPressed = () => {
        navigation.navigate("AddNotes_Screen");
    }

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#fde4f2', '#ffffff', '#ffffff', '#ececec', '#671B61']} style={styles.linearGradient}>

                <View style={styles.titleCatagoriesView}>
                    <View style={styles.titleView}>
                        <Text style={styles.titleText}>Notes Catagories</Text>
                    </View>

                    {/* <View style={styles.catagoriesFlatListView}>
                    <FlatList
                        // horizonta/l
                        numColumns={2}
                        data={CatagoriesData}
                        renderItem={(({ item }) => <CatagoriesCard item={item} />)}
                    />
                </View> */}

                    <View style={styles.catagoriesView}>
                        <View style={styles.catagoryOneView}>

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

        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingHorizontal: 10

    },
    linearGradient: {
        flex: 1

    },
    titleCatagoriesView: {
        //flex: 1,
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
        //borderBottomRightRadius: 15,
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

    }

})