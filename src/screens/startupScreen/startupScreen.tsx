import StartupScreenUi from '../../components/ui/Startup';
//import {useNavigation} from '@react-navigation/native';

import {useAppNavigation} from '../../@types/AppNavigation';

const StartupScreen = () => {
  const navigation = useAppNavigation();

  const onGetStartedPressed = () => {
    navigation.navigate('Home_Screen');
  };

  return (
    <StartupScreenUi
      onPress={onGetStartedPressed}
      title="Write Down your day"
      title2="And make it a good "
      title2Word="Memory"
      description="In our app, every information that you write down about your life, is encrypted. Here is a local safe to keep your notes and memories always in hand"
      belowDescription="Always with you"
      buttonText="Get started"
    />
  );
};

export default StartupScreen;
