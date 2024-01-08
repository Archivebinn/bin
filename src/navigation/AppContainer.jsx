import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens //
import CreateSchedule from '../pages/CreateActivites/CreateSchedule';
import SelectDateAndTime from '../pages/CreateActivites/SelectDateAndTime';

const Stack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="select-date" component={SelectDateAndTime} />
      <Stack.Screen name="create-schedule" component={CreateSchedule} />
    </Stack.Navigator>
  );
};

export default AppContainer;
