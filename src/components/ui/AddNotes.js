import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image, StatusBar, Alert, SafeAreaView } from 'react-native';

import { NotepadAppColors } from '../colors/NotepadColors';

const AddNotesScreenUi = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.textInputView}>

          <View style={styles.titleView}>
            <Text style={styles.titleText}>{props.title}</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Pressable
              onPress={props.selectImage}
              style={{ alignItems: 'center' }}>
              <View style={{ borderWidth: 1, padding: 5, borderRadius: 100, borderStyle: 'dotted' }}>
                <Image
                  style={{ height: 50, width: 50, borderRadius: 100 }}
                  source={props.imageSource}
                />
              </View>

              <Text style={{ textAlign: 'center', fontSize: 20 }}>{props.uploadText}</Text>
            </Pressable>
          </View>

          <TextInput
            style={styles.textInput}
            placeholder='Title'
            placeholderTextColor={NotepadAppColors.darkGray}
            value={props.titleValue}
            //onChangeText={(text) => setNote({ ...note, title: text })}
            onChangeText={props.titleFunction}
            
          />
          <TextInput
            style={styles.textInput}
            placeholder='Description'
            placeholderTextColor={NotepadAppColors.darkGray}
            value={props.descriptionValue}

            //onChangeText={(text) => setNote({ ...note, description: text })}
            onChangeText={props.descriptionFunction}
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.selectCatagoryView}>

          <Text style={styles.selectCatagoryText}>{props.catagoryText}</Text>

          <View style={styles.catagoryViewOne}>
            <Pressable
              onPress={props.onHomeCatagorySelect}
              style={styles.catagoryPressable}>
              <Text style={styles.catagoryPressableText}>{props.homeCatagoryName}</Text>
            </Pressable>
            <Pressable
              onPress={props.onOfficeCatagorySelect}
              style={styles.catagoryPressable}>
              <Text style={styles.catagoryPressableText}>{props.officeCatagoryName}</Text>
            </Pressable>
          </View>

          <View style={styles.catagoryViewTwo}>
            <Pressable
              onPress={props.onWorkCatagorySelect}
              style={styles.catagoryPressable}>
              <Text style={styles.catagoryPressableText}>{props.workCatagoryName}</Text>
            </Pressable>
            <Pressable
              onPress={props.onHealthCatagorySelect}
              style={styles.catagoryPressable}>
              <Text style={styles.catagoryPressableText}>{props.healthCatagoryName}</Text>
            </Pressable>
          </View>

          <Text style={{ fontSize: 20, width: '90%', color: 'black', textAlign: 'center', paddingBottom: 10 }}>{props.catagoryMention} <Text style={{ color: 'red' }}>{props.notesCatagory}</Text></Text>

        </View>

        <View style={styles.pressableView}>
          <Pressable
            onPress={props.onSavePressed}
            style={styles.pressable}>
            <Text style={styles.pressableText}>{props.buttonText}</Text>
          </Pressable>

          <Pressable
            onPress={props.onViewNotesPressed}
            style={{ paddingTop: 20 }}>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', backgroundColor: NotepadAppColors.lightBlue, paddingHorizontal: 20, borderRadius: 10, paddingVertical: 10 }}>{props.viewNotesText}</Text>
          </Pressable>

        </View>

      </View>
    </SafeAreaView>
  )
}

export default AddNotesScreenUi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleView: {
    alignItems: 'center',
    paddingTop: 30,
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