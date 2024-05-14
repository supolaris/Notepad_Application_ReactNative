import StartupScreenUi from '../../components/ui/StartupScreenUi';
import { useNavigation } from '@react-navigation/native';

const StartupScreen = () => {

    const navigation = useNavigation();

    const onGetStartedPressed = () => {
        navigation.navigate('Home_Screen');
    }

    return (
        <StartupScreenUi 
        onPress={onGetStartedPressed}
        title='Write Down your day'
        title2='And make it a good '
        title2Word='Memory'
        description='In our app, every information that you write down about your life, is encrypted. Here is a local safe to keep your notes and memories always in hand'
        belowDescription='Always with you'
        buttonText='Get started'
        />
    )
}

export default StartupScreen;
