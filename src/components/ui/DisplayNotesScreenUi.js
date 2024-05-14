import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NotepadAppColors } from '../colors/notepadColors';

const DisplayNotesScreenUi = (props) => {

  return (
    <View style={styles.itemView}>

    <View style={styles.notesItemView}>

        <View>
            <Image
                style={{ height: 50, width: 50, borderRadius: 100 }}
                source={props.imageSource}
            />
        </View>

        <View style={styles.titleView}>
            <Text style={styles.titleText}>{props.title}</Text>
        </View>

        <View style={styles.descriptionView}>
            <Text style={styles.descriptionText}>{props.description}</Text>
        </View>

    </View>

</View>
  )
}

export default DisplayNotesScreenUi;


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