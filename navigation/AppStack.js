import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, FirstName, LastName, QuestionList} from '../screens';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='FirstName' component={FirstName} />
      <Stack.Screen name='LastName' component={LastName} />
      <Stack.Screen name='QuestionList' component={QuestionList} />
    </Stack.Navigator>
  );
};
