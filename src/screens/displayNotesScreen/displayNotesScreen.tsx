import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Pressable, TouchableOpacity } from 'react-native';

import Header from '../../components/header/header';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useFocusEffect, useRoute } from '@react-navigation/native';

import { NotepadAppColors } from '../../components/colors/notepadColors';

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['ReactImageView: Image source \'\' doesn\'t exist']);

const DisplayNotesScreen = (props: any) => {

    const { route } = props;
    const { catagoryName } = route.params;

    const [notes, setNotes] = useState([]);

    useFocusEffect(useCallback(() => {
        loadNotes();
    },[]));

    const loadNotes = async () => {
        const storedNotes = await AsyncStorage.getItem(catagoryName);
        //setNotes(storedNotes);
        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }
    };

    const renderItem = ({ item, index }: { item: any, index: any }) => (

        <View style={styles.itemView}>

            <View style={styles.notesItemView}>

                <View>
                    <Image
                        style={{ height: 50, width: 50, borderRadius: 100 }}
                        source={{ uri: item.image }}
                    />
                </View>

                <View style={styles.titleView}>
                    <Text style={styles.titleText}>{item.title}</Text>
                </View>

                <View style={styles.descriptionView}>
                    <Text style={styles.descriptionText}>{item.description}</Text>
                </View>

            </View>

        </View>

    );

    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={notes}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyListText}>No notes found</Text>
                )}
            />
        </View>
    )
}

export default DisplayNotesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    emptyListText: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        paddingTop: 50
    },

    itemView: {
        backgroundColor: NotepadAppColors.darkGray,
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        paddingLeft: 20

    },
    notesItemView: {
        marginVertical: 10

    },
    titleView: {
        borderBottomWidth: 0.5,
        borderColor: NotepadAppColors.white

    },
    titleText: {
        fontSize: 30,
        color: NotepadAppColors.white,

    },
    descriptionView: {

    },
    descriptionText: {
        fontSize: 20,
        color: NotepadAppColors.white,

    }

});