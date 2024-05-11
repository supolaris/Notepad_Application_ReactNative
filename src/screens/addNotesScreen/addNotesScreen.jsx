import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image, FlatList, Alert, SafeAreaView } from 'react-native';

import { NotepadAppColors } from '../../components/colors/notepadColors';

import { useNavigation } from '@react-navigation/native';

import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';

// import FastImage from 'react-native-fast-image';

import AsyncStorage from '@react-native-async-storage/async-storage';

const AddNotesScreen = () => {
  //const dummyImage = require('../../../assets/images/houseCatagory.png');

  const navigation = useNavigation();

  const [note, setNote] = useState({ title: '', description: '', image: '' });
  const [notes, setNotes] = useState([]);

  const [notesCatagory, setNotesCatagory] = useState();

  const selectImage = async () => {
    console.log('image picker pressed');
    const result = await launchImageLibrary();
    setNote({ ...note, image: result?.assets[0]?.uri })
    console.log('result' + result);
  };

  const onSavePressed = async () => {

    if (!note.title) {
      Alert.alert("Invalid input", "Enter title")
    }
    else {
      if (!note.description) {
        Alert.alert("Invalid input", "Enter description")
      }
      else {
        if (!notesCatagory) {
          Alert.alert("Invalid Input", "Select catagory")
        }
        else {
          if (notesCatagory === 'Home') {
            const newNotes = [...notes, note];
            await AsyncStorage.setItem('HomeNotes', JSON.stringify(newNotes));
            setNotes(newNotes);
            setNote({ title: '', description: '' })
          }

          else if (notesCatagory === 'Office') {
            const newNotes = [...notes, note];
            await AsyncStorage.setItem('OfficeNotes', JSON.stringify(newNotes));
            setNotes(newNotes);
            setNote({ title: '', description: '' })
          }

          else if (notesCatagory === 'Work') {
            const newNotes = [...notes, note];
            await AsyncStorage.setItem('WorkNotes', JSON.stringify(newNotes));
            setNotes(newNotes);
            setNote({ title: '', description: '' })
          }

          else if (notesCatagory === 'Health') {
            const newNotes = [...notes, note];
            await AsyncStorage.setItem('HealthNotes', JSON.stringify(newNotes));
            setNotes(newNotes);
            setNote({ title: '', description: '' })
          }
          Alert.alert("Success", "Your notes are saved")
        }
      }
    }
  };

  const onHomeCatagorySelect = () => {
    setNotesCatagory('Home');
  }

  const onOfficeCatagorySelect = () => {
    setNotesCatagory('Office');
  }

  const onWorkCatagorySelect = () => {
    setNotesCatagory('Work');
  }

  const onHealthCatagorySelect = () => {
    setNotesCatagory('Health');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.textInputView}>

          <View style={styles.titleView}>
            <Text style={styles.titleText}>Add Notes</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Pressable
              onPress={selectImage}
              style={{ alignItems: 'center' }}>
              <View style={{ borderWidth: 1, padding: 5, borderRadius: 100, borderStyle: 'dotted' }}>
                <Image
                  style={{ height: 50, width: 50, borderRadius: 100 }}
                  source={{ uri: note.image }}
                />
              </View>

              <Text style={{ textAlign: 'center', fontSize: 20 }}>Upload</Text>
            </Pressable>
          </View>

          <TextInput
            style={styles.textInput}
            placeholder='Title'
            placeholderTextColor={NotepadAppColors.darkGray}
            value={note.title}
            onChangeText={(text) => setNote({ ...note, title: text })}
          />
          <TextInput
            style={styles.textInput}
            placeholder='Description'
            placeholderTextColor={NotepadAppColors.darkGray}
            value={note.description}
            onChangeText={(text) => setNote({ ...note, description: text })}
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.selectCatagoryView}>

          <Text style={styles.selectCatagoryText}>Select Catagory</Text>

          <View style={styles.catagoryViewOne}>
            <Pressable
              onPress={onHomeCatagorySelect}
              style={styles.catagoryPressable}>
              <Text style={styles.catagoryPressableText}>Home</Text>
            </Pressable>
            <Pressable
              onPress={onOfficeCatagorySelect}
              style={styles.catagoryPressable}>
              <Text style={styles.catagoryPressableText}>Office</Text>
            </Pressable>
          </View>

          <View style={styles.catagoryViewTwo}>
            <Pressable
              onPress={onWorkCatagorySelect}
              style={styles.catagoryPressable}>
              <Text style={styles.catagoryPressableText}>Work</Text>
            </Pressable>
            <Pressable
              onPress={onHealthCatagorySelect}
              style={styles.catagoryPressable}>
              <Text style={styles.catagoryPressableText}>Health</Text>
            </Pressable>
          </View>

          <Text style={{ fontSize: 20, width: '90%', color: 'black', textAlign: 'center', paddingBottom: 10 }}>Selected Catagory: <Text style={{ color: 'red' }}>{notesCatagory}</Text></Text>

        </View>

        <View style={styles.pressableView}>
          <Pressable
            onPress={onSavePressed}
            style={styles.pressable}>
            <Text style={styles.pressableText}>Save</Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('Home_Screen')}
            style={{ paddingTop: 20 }}>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', backgroundColor: NotepadAppColors.lightBlue, paddingHorizontal: 20, borderRadius: 10, paddingVertical: 10 }}>View Notes</Text>
          </Pressable>

        </View>

      </View>
    </SafeAreaView>
  )
}

export default AddNotesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleView: {
    alignItems: 'center',
    paddingTop: 10,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: NotepadAppColors.black
  },
  headingView: {
    paddingTop: 20
  },
  headingText: {
    color: NotepadAppColors.black,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  imageDisplayView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    padding: 30,
    borderRadius: 100,
    borderWidth: 1
  },
  imageDisplay: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderRadius: 10
  },
  uploadImageText: {
    fontSize: 18,
    color: NotepadAppColors.black

  },
  selectCatagoryView: {
    paddingTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    borderStyle: 'dashed',
    borderColor: NotepadAppColors.black,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectCatagoryText: {
    fontSize: 25,
    color: NotepadAppColors.black,
    fontWeight: 'bold'
  },
  catagoryViewOne: {
    flexDirection: 'row',
  },
  catagoryPressable: {
    width: '30%',
    backgroundColor: NotepadAppColors.lightBlue,
    margin: 10,
    borderRadius: 10
  },
  catagoryPressableText: {
    fontSize: 20,
    color: NotepadAppColors.white,
    padding: 15,
    textAlign: 'center'
  },
  catagoryViewTwo: {
    flexDirection: 'row',

  },
  textInputView: {
    justifyContent: 'center',
  },
  textInput: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: NotepadAppColors.black,
    borderRadius: 10,
    fontSize: 20,
    color: NotepadAppColors.black
  },
  pressableView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  pressable: {
    backgroundColor: NotepadAppColors.lightBlue,
    paddingVertical: 10,
    borderRadius: 10,
    width: '80%',
  },
  pressableText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: NotepadAppColors.white,
    textAlign: 'center'
  },
})