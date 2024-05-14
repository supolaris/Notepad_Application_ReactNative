import React, { useState, useCallback } from 'react';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreenUi from '../../components/ui/HomeScreenUi';

const HomeScreen = () => {

    const navigation = useNavigation();

    const [refreshing, setRefreshing] = useState(false);

    const [homeCount, setHomeCount] = useState('');
    const [officeCount, setOfficeCount] = useState('');
    const [workCount, setWorkCount] = useState('');
    const [healthCount, setHealthCount] = useState('');

    useFocusEffect(
        useCallback(() => {

            const getNotesCount = async () => {
                const HomeNotesCount: any = await AsyncStorage.getItem("HomeNotesCount");
                setHomeCount(HomeNotesCount);

                const OfficeNotesCount: any = await AsyncStorage.getItem("OfficeNotesCount");
                setOfficeCount(OfficeNotesCount);

                const WorkNotesCount: any = await AsyncStorage.getItem("WorkNotesCount");
                setWorkCount(WorkNotesCount);

                const HealthNotesCount: any = await AsyncStorage.getItem("HealthNotesCount");
                setHealthCount(HealthNotesCount);
            }

            getNotesCount();

        }, [])
    )

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    // Home Catagory pressed
    const onHomeCatagoryPressed = () => {
        navigation.navigate('DisplayNotes_Screen', { catagoryName: 'HomeNotes' })
    }

    // Office Catagory pressed
    const onOfficeCatagoryPressed = () => {
        navigation.navigate('DisplayNotes_Screen', { catagoryName: 'HomeNotes' })
    }

    // Office Catagory pressed
    const onWorkCatagoryPressed = () => {
        navigation.navigate('DisplayNotes_Screen', { catagoryName: 'HomeNotes' })
    }

    // Office Catagory pressed
    const onHealthCatagoryPressed = () => {
        navigation.navigate('DisplayNotes_Screen', { catagoryName: 'HomeNotes' })
    }

    // Add notes button pressed
    const onAddNotesPressed = () => {
        navigation.navigate("AddNotes_Screen");
    }

    return (
        <HomeScreenUi

            refreshing={refreshing}
            onRefresh={onRefresh}

            title='Notes Catagories'
            homeCount={homeCount}

            onHomeCatagoryPressed={onHomeCatagoryPressed}
            homeCatagoryName='Home'

            officeCount={officeCount}
            onOfficeCatagoryPressed={onOfficeCatagoryPressed}
            officeCatagoryName='Office'

            onWorkCatagoryPressed={onWorkCatagoryPressed}
            workCatagoryName='Work'
            workCount={workCount}

            onHealthCatagoryPressed={onHealthCatagoryPressed}
            healthCatagoryName='Health'
            healthCount={healthCount}

            onAddNotesPressed={onAddNotesPressed}
            buttonText='Add notes'
        />

    )
}

export default HomeScreen;

