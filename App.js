import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigation from './src/navigations/StackNavigation';
import Login from './src/screens/Login';

const App= () => {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
};
export default App;
