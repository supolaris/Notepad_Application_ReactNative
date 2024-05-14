import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import StartupScreen from '../../../screens/startupScreen/StartupScreen';
import HomeScreen from '../../../screens/homeScreen/homeScreen';
import AddNotesScreen from '../../../screens/addNotesScreen/addNotesScreen';
import DisplayNotesScreen from '../../../screens/displayNotesScreen/displayNotesScreen';

const Stack = createNativeStackNavigator();

function MyNativeStack() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >

        <Stack.Screen
          name="Startup_Screen"
          component={StartupScreen}
        />

        <Stack.Screen
          name="AddNotes_Screen"
          component={AddNotesScreen}
        />

        <Stack.Screen
          name="DisplayNotes_Screen"
          component={DisplayNotesScreen}
        />

        <Stack.Screen
          name="Home_Screen"
          component={HomeScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default MyNativeStack;