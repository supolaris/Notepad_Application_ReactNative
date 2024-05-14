import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type NativeStackParamsList = {
  Startup_Screen: undefined;
  Home_Screen: undefined;
  AddNotes_Screen: undefined;
  DisplayNotes_Screen: {catagoryName: string};
};

// export type HomeProp = NativeStackScreenProps<
//   NativeStackParamsList,
//   'Home_Screen'
// >;

// export type StartupProp = NativeStackScreenProps<
//   NativeStackParamsList,
//   'Startup_Screen'
// >;

// export type AddNotesProp = NativeStackScreenProps<
//   NativeStackParamsList,
//   'AddNotes_Screen'
// >;

// export type DisplayProp = NativeStackScreenProps<
//   NativeStackParamsList,
//   'DisplayNotes_Screen'
// >;
