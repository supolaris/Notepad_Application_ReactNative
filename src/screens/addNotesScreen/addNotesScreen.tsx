import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';

import { NotepadAppColors } from '../../components/colors/notepadColors';

const AddNotesScreen = () => {
  return (
    <View style={styles.container}>

      <View style={styles.imageDisplayView}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageDisplay}
            source={require('../../../assets/images/houseCatagory.png')}
          />
        </View>
        <Text style={styles.uploadImageText}>
          Upload image
        </Text>
      </View>

      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInput}
          placeholder='Write your notes'
          placeholderTextColor={NotepadAppColors.darkGray}
          multiline
          numberOfLines={4}
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
        <Pressable style={styles.pressable}>
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
    flex: 0.2,
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