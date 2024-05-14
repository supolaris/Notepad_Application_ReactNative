import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import StartupScreen from '../../../screens/StartupScreen/StartupScreen';
import HomeScreen from '../../../screens/HomeScreen/HomeScreen';
import AddNotesScreen from '../../../screens/AddNotesScreen/AddNotesScreen';
import DisplayNotesScreen from '../../../screens/DisplayNotesScreen/DisplayNotesScreen';

import {NativeStackParamsList} from '../../../@types/NavigationTypes';

const Stack = createNativeStackNavigator<NativeStackParamsList>();

// const Stack = createNativeStackNavigator();

function MyNativeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Startup_Screen" component={StartupScreen} />

        <Stack.Screen name="AddNotes_Screen" component={AddNotesScreen} />

        <Stack.Screen
          name="DisplayNotes_Screen"
          component={DisplayNotesScreen}
        />

        <Stack.Screen name="Home_Screen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyNativeStack;
