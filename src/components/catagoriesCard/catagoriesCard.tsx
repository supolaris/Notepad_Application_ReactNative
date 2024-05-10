import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { CatagoriesData } from '../../../assets/catagoriesData/catagoriesData';
import { NotepadAppColors } from '../colors/notepadColors';

const CatagoriesCard = (props: any) => {

  return (
      <View style={styles.container}>

        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/houseCatagory.png')}
          />
        </View>

        <View style={styles.titleView}>
          <Text style={styles.titleText}>{props?.item?.title}</Text>
        </View>

      </View>
  )
}

export default CatagoriesCard;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    //width: '100%',
    //alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    //paddingVertical: 10,
    marginVertical: 5,
    marginHorizontal: 5
  },
  imageView: {

  },
  image: {
    width: 100,
    height: 100

  },
  titleView: {
    backgroundColor: 'red',
    width: '100%'

  },
  titleText: {
    fontSize: 18,
    color: NotepadAppColors.white,
    textAlign: 'center'
  },
})