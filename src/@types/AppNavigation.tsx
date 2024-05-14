import {useNavigation, NavigationProp} from '@react-navigation/native';
import {NativeStackParamsList} from './NavigationTypes';

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<NativeStackParamsList>>();
};
