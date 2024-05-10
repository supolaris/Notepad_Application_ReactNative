import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image, FlatList } from 'react-native';

import { NotepadAppColors } from '../../components/colors/notepadColors';

import { launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';

import FastImage from 'react-native-fast-image';

const AddNotesScreen = () => {

  const [imageUrl, setImageUrl] = useState();
  const [enteredNotesText, setEnteredNotesText] = useState('');
  const [notes, setNotes] = useState([]);

  const image = require('../../../assets/images/healthCatagory.png')

  const onImagePickPressed = async () => {
    console.log('image picker pressed');
    const result = await launchImageLibrary();
    setImageUrl(result?.assets[0]?.uri);
    console.log('result' + result);
  };

  function enterNotesInputHandler(enteredText) {
    setEnteredNotesText(enteredText);
  }

  function addEnteredNotes() {
    setNotes((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredNotesText, id: Math.random().toString() },
    ])

    // modalCloseHandler()
  }

  return (
    <View style={styles.container}>
      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInput}
          placeholder='Write your notes'
          placeholderTextColor={NotepadAppColors.darkGray}
          onChangeText={enterNotesInputHandler}
          multiline
          numberOfLines={4}
        />
      </View>

      <View>
        <FlatList
          data={notes}

          renderItem={(itemData) => {
            itemData.index
            return (
              <View>
                <Pressable
                  //style={({ pressed }) => pressed && HomeStyles.pressedItem}
                  android_ripple={{ color: 'red' }}
                //onPress={deleteGoalHandler.bind(this, itemData.item.id)}
                >
                  <Text
                  // style={HomeStyles.goalText}
                  >
                    {itemData.item.text}</Text>
                </Pressable>
              </View>
            )
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}


        />
      </View>

      <View style={styles.selectCatagoryView}>

        <Text style={styles.selectCatagoryText}>Select Catagory</Text>

        <View style={styles.catagoryViewOne}>
          <Pressable style={styles.catagoryPressable}>
            <Text style={styles.catagoryPressableText}>Home</Text>
          </Pressable>
          <Pressable style={styles.catagoryPressable}>
            <Text style={styles.catagoryPressableText}>Office</Text>
          </Pressable>
        </View>

        <View style={styles.catagoryViewTwo}>
          <Pressable style={styles.catagoryPressable}>
            <Text style={styles.catagoryPressableText}>Work</Text>
          </Pressable>
          <Pressable style={styles.catagoryPressable}>
            <Text style={styles.catagoryPressableText}>Health</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.pressableView}>
        <Pressable
          onPress={addEnteredNotes}
          style={styles.pressable}>
          <Text style={styles.pressableText}>Save</Text>
        </Pressable>
      </View>

    </View>
  )
}

export default AddNotesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  headingView: {
    flex: 0.4,
    paddingTop: 20

  },
  headingText: {
    color: NotepadAppColors.black,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  imageDisplayView: {
    flex: 1.6,
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
    flex: 1.5,
    marginHorizontal: 10,
    borderWidth: 1,
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
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: NotepadAppColors.black,
    borderRadius: 10,
    fontSize: 20,
    color: NotepadAppColors.black

  },

  pressableView: {
    flex: 0.7,
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