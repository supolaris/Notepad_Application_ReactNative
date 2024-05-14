import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image, StatusBar, Alert, SafeAreaView } from 'react-native';

import { NotepadAppColors } from '../../components/colors/NotepadColors';

import { useNavigation } from '@react-navigation/native';

import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';

import AddNotesScreenUi from '../../components/ui/AddNotesScreenUi';

// import FastImage from 'react-native-fast-image';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['ReactImageView: Image source \"\" doesn\'t exist']);
LogBox.ignoreLogs(['source.uri should not be an empty string']);

const AddNotesScreen = () => {
  //const dummyImage = require('../../../assets/images/houseCatagory.png');

  const navigation = useNavigation();

  const [note, setNote] = useState({ title: '', description: '', image: '' });

  const [homeNotes, setHomeNotes] = useState([]);
  const [OfficeNotes, setOfficeNotes] = useState([]);
  const [workNotes, setWorkNotes] = useState([]);
  const [healthNotes, setHealthNotes] = useState([]);

  const [notesCatagory, setNotesCatagory] = useState();

  //useEffect(() => {

  // AsyncStorage.removeItem("HomeNotesCount");
  // AsyncStorage.removeItem("OfficeNotesCount");
  // AsyncStorage.removeItem("HealthNotesCount");
  // AsyncStorage.removeItem("WorkNotesCount");

  // AsyncStorage.removeItem("HomeNotes");
  // AsyncStorage.removeItem("OfficeNotes");
  // AsyncStorage.removeItem("HealthNotes");
  // AsyncStorage.removeItem("WorkNotes");


  //   const getData = async () => {
  //     const homeData = await AsyncStorage.getItem("OfficeNotes");
  //     console.log("Office Data: " + homeData);
  //   }

  //   getData();

  // }, [])

  const selectImage = async () => {
    const result = await launchImageLibrary();
    setNote({ ...note, image: result?.assets[0]?.uri })
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
            try {
              const previousHomeNotes = await AsyncStorage.getItem("HomeNotes");
              let HomeNotesCount
              let previousArrayValue = []
              if (previousHomeNotes !== null && previousHomeNotes !== '') {
                setHomeNotes(JSON.parse(previousHomeNotes));
                previousArrayValue = JSON.parse(previousHomeNotes)
                const newNotes = [...previousArrayValue, note];
                await AsyncStorage.setItem('HomeNotes', JSON.stringify(newNotes));
                HomeNotesCount = newNotes.length;
                await AsyncStorage.setItem("HomeNotesCount", HomeNotesCount.toString());
              } else {

                setHomeNotes([]);
                const newNotes = [...homeNotes, note];
                await AsyncStorage.setItem('HomeNotes', JSON.stringify(newNotes));
                HomeNotesCount = newNotes.length;
                await AsyncStorage.setItem("HomeNotesCount", HomeNotesCount.toString());
              }
              setNote({ title: '', description: '' });

            } catch (error) {
              console.error("Error:", error);
            }
          }

          else if (notesCatagory === 'Office') {

            try {
              let previousOfficeNotes = await AsyncStorage.getItem('OfficeNotes');
              let previousArrayValue = [];
              let OfficeNotesCount

              if (previousOfficeNotes !== null && previousOfficeNotes !== '') {
                setOfficeNotes(JSON.parse(previousOfficeNotes))
                previousArrayValue = JSON.parse(previousOfficeNotes);
                const newNotes = [...previousArrayValue, note]
                await AsyncStorage.setItem('OfficeNotes', JSON.stringify(newNotes));
                OfficeNotesCount = newNotes.length;
                await AsyncStorage.setItem("OfficeNotesCount", OfficeNotesCount.toString());

              }
              else {
                setOfficeNotes([]);
                const newNotes = [...OfficeNotes, note]
                await AsyncStorage.setItem('OfficeNotes', JSON.stringify(newNotes));
                OfficeNotesCount = newNotes.length;
                await AsyncStorage.setItem("OfficeNotesCount", OfficeNotesCount.toString());
              }

              setNote({ title: '', description: '' });

            } catch (error) {
              console.log("Error: ", error);
            }
          }

          else if (notesCatagory === 'Work') {
            try {
              let previousWorkNotes = await AsyncStorage.getItem('WorkNotes');
              let previousArrayValue = [];
              let WorkNotesCount
              if (previousWorkNotes !== null && previousWorkNotes !== '') {
                setWorkNotes(JSON.parse(previousWorkNotes));
                previousArrayValue = JSON.parse(previousWorkNotes);
                const newNotes = [...previousArrayValue, note];
                await AsyncStorage.setItem('WorkNotes', JSON.stringify(newNotes));
                WorkNotesCount = newNotes.length;
                await AsyncStorage.setItem("WorkNotesCount", WorkNotesCount.toString());
              }
              else {
                setWorkNotes([]);
                const newNotes = [...workNotes, note]
                await AsyncStorage.setItem('WorkNotes', JSON.stringify(newNotes));
                WorkNotesCount = newNotes.length;
                await AsyncStorage.setItem("WorkNotesCount", WorkNotesCount.toString());
              }
              setNote({ title: '', description: '' });

            } catch (error) {
              console.log("Error: ", error);
            }

          }

          else if (notesCatagory === 'Health') {

            try {
              let previousHealthNotes = await AsyncStorage.getItem('HealthNotes');
              let previousArrayValue = [];
              let HealthNotesCount
              if (previousHealthNotes !== null && previousHealthNotes !== '') {
                setWorkNotes(JSON.parse(previousHealthNotes));
                previousArrayValue = JSON.parse(previousHealthNotes);
                const newNotes = [...previousArrayValue, note];
                await AsyncStorage.setItem('HealthNotes', JSON.stringify(newNotes));
                HealthNotesCount = newNotes.length;
                await AsyncStorage.setItem("HealthNotesCount", HealthNotesCount.toString());
              }
              else {
                setHealthNotes([]);
                const newNotes = [...healthNotes, note]
                await AsyncStorage.setItem('HealthNotes', JSON.stringify(newNotes));
                HealthNotesCount = newNotes.length;
                await AsyncStorage.setItem("HealthNotesCount", HealthNotesCount.toString());
              }
              setNote({ title: '', description: '' });

            } catch (error) {
              console.log("Error: ", error);
            }
          }
          Alert.alert("Success", "Your notes are saved");
        }
      }
    }
  };

  const descriptionFunction = (text) => {
    setNote({ ...note, description: text })
  }

  const titleFunction = (text) => {
    setNote({ ...note, title: text })
  }

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

  const onViewNotesPressed = () => {
    navigation.navigate('Home_Screen');
  }

  return (

    <AddNotesScreenUi 
    title='Add Notes'
    selectImage={selectImage}
    imageSource={{ uri: note.image }}
    uploadText='Upload'

    titleValue={note.title}
    titleFunction={titleFunction}

    descriptionValue={note.description}
    descriptionFunction={descriptionFunction}

    catagoryText='Select Catagory'

    onHomeCatagorySelect={onHomeCatagorySelect}
    homeCatagoryName='Home'

    officeCatagoryName='Office'
    onOfficeCatagorySelect={onOfficeCatagorySelect}

    workCatagoryName='Work'
    onWorkCatagorySelect={onWorkCatagorySelect}

    healthCatagoryName='Health'
    onHealthCatagorySelect={onHealthCatagorySelect}

    catagoryMention='Selected Catagory:'
    notesCatagory={notesCatagory}

    onSavePressed={onSavePressed}
    buttonText='Save'

    onViewNotesPressed={onViewNotesPressed}
    viewNotesText='View Notes'
    
    
    />

  )
}

export default AddNotesScreen;

