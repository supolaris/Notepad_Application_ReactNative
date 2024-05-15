import React from 'react';
import {
  RefreshControl,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  StatusBar,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import AddLottie from '../lottie/AddLottie';

import {NotepadAppColors} from '../colors/NotepadColors';

const HomeScreenUi = props => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ScrollView
        contentContainerStyle={{flex: 1}}
        refreshControl={
          <RefreshControl
            refreshing={props.refreshing}
            onRefresh={props.onRefresh}
          />
        }>
        <LinearGradient
          colors={['#fde4f2', '#ffffff', '#ffffff', '#ececec', '#671B61']}
          style={styles.linearGradient}>
          <View style={styles.titleCatagoriesView}>
            <View style={styles.titleView}>
              <Text style={styles.titleText}>{props.title}</Text>
            </View>

            <View style={styles.catagoriesView}>
              <View style={styles.catagoryOneView}>
                <View>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    {props.homeCount}
                  </Text>
                </View>

                <Pressable onPress={props.onHomeCatagoryPressed}>
                  <View style={styles.imageView}>
                    <Image
                      style={[styles.image, {marginBottom: 2, height: 148}]}
                      source={require('../../assets/images/houseCatagory.png')}
                    />
                  </View>
                  <View style={styles.catgoriesTitleView}>
                    <Text
                      style={[
                        styles.catagoriesTitleText,
                        {borderBottomRightRadius: 20},
                      ]}>
                      {props.homeCatagoryName}
                    </Text>
                  </View>
                </Pressable>
              </View>

              <View style={styles.catagoryTwoView}>
                <View>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    {props.officeCount}
                  </Text>
                </View>

                <Pressable onPress={props.onOfficeCatagoryPressed}>
                  <View style={styles.imageView}>
                    <Image
                      style={styles.image}
                      source={require('../../assets/images/officeCatagory.png')}
                    />
                  </View>
                  <View style={styles.catgoriesTitleView}>
                    <Text
                      style={[
                        styles.catagoriesTitleText,
                        {borderBottomLeftRadius: 20},
                      ]}>
                      {props.officeCatagoryName}
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>

            <View style={styles.catagoriesView}>
              <View style={styles.catagoryThreeView}>
                <Pressable onPress={props.onWorkCatagoryPressed}>
                  <View style={styles.catgoriesTitleView}>
                    <Text
                      style={[
                        styles.catagoriesTitleText,
                        {borderTopRightRadius: 20},
                      ]}>
                      {props.workCatagoryName}
                    </Text>
                  </View>
                  <View style={styles.imageView}>
                    <Image
                      style={styles.image}
                      source={require('../../assets/images/workCatagory.png')}
                    />
                  </View>
                </Pressable>
                <View>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    {props.workCount}
                  </Text>
                </View>
              </View>

              <View style={styles.catagoryFourView}>
                <Pressable onPress={props.onHealthCatagoryPressed}>
                  <View style={styles.catgoriesTitleView}>
                    <Text
                      style={[
                        styles.catagoriesTitleText,
                        {borderTopLeftRadius: 20},
                      ]}>
                      {props.healthCatagoryName}
                    </Text>
                  </View>
                  <View style={styles.imageView}>
                    <Image
                      style={[styles.image]}
                      source={require('../../assets/images/healthCatagory.png')}
                    />
                  </View>
                </Pressable>

                <View>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    {props.healthCount}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.lottieTextView}>
            <Pressable
              onPress={props.onAddNotesPressed}
              style={styles.pressable}>
              <AddLottie />
            </Pressable>
            <Text style={styles.addNotesText}>{props.buttonText}</Text>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default HomeScreenUi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  titleCatagoriesView: {
    paddingTop: 30,
    justifyContent: 'center',
  },
  titleView: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: NotepadAppColors.black,
  },
  catagoriesView: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  catagoryOneView: {
    marginHorizontal: 30,
    borderWidth: 0.9,
    borderBottomRightRadius: 20,
  },
  catagoryTwoView: {
    marginHorizontal: 30,
    borderWidth: 0.9,
    borderBottomLeftRadius: 20,
  },
  catagoryThreeView: {
    marginHorizontal: 30,
    borderWidth: 0.9,
    borderTopRightRadius: 20,
  },
  catagoryFourView: {
    marginHorizontal: 30,
    borderWidth: 0.9,
    borderTopLeftRadius: 20,
  },
  imageView: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  image: {
    height: 150,
    width: 150,
  },
  catgoriesTitleView: {},
  catagoriesTitleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: NotepadAppColors.white,
    backgroundColor: NotepadAppColors.lightBlue,
    textAlign: 'center',
  },

  lottieTextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  pressable: {},
  addNotesText: {
    fontSize: 30,
    color: NotepadAppColors.white,
  },
});
