import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Pressable, TouchableOpacity } from 'react-native';

import Header from '../../components/header/Header';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useFocusEffect, useRoute } from '@react-navigation/native';

import { LogBox } from 'react-native';

import DisplayNotesScreenUi from '../../components/ui/DisplayNotesScreenUi';

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
        
        <DisplayNotesScreenUi 
        imageSource={{ uri: item.image }}
        title={item.title}
        description={item.description}
        />

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
    }
});