import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterScreen } from './src/Presentation/views/register/Register';

const Stack = createNativeStackNavigator();

const App = () => {

  return ( 
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false

      }}>
        <Stack.Screen 
          name='Register' 
          component={RegisterScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App