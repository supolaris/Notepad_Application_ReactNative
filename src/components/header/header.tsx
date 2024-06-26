import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import PlusIcon from 'react-native-vector-icons/AntDesign';
import {NotepadAppColors} from '../colors/NotepadColors';

import {useAppNavigation} from '../../@types/AppNavigation';

const Header = () => {
  const navigation = useAppNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('AddNotes_Screen')}>
        <View>
          <PlusIcon name="pluscircleo" size={35} color="black" />
        </View>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderBottomWidth: 1,
    paddingVertical: 20,
    backgroundColor: NotepadAppColors.white,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
    elevation: 50,
  },
});
