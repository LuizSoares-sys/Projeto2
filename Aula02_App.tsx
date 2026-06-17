import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen  from "./src/Presentation/views/home/Home";
import  RegisterScreen  from "./src/Presentation/views/register/Register";
import  RecuperarScreen  from "./src/Presentation/views/RecuperarSenha/RecuperarSenha";
import NovaSenhaScreen, { RecieveNewPassword } from './src/Presentation/views/NewPassword/NewPassword';


export type RootStackParamList = {
  HomeScreen: undefined,
  RegisterScreen: undefined,
  RecuperarScreen: undefined,
  RecieveNewPassword: undefined
}

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen

          name='HomeScreen'
          component={HomeScreen}

        />

        <Stack.Screen
          name="RecuperarScreen"
          component={RecuperarScreen}
          options={{
            headerShown: true,
            title: 'Recuperar senha'
          }}
        />

        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: true,
            title: 'Novo usuário'
          }}
        />

        <Stack.Screen
          name="RecieveNewPassword"
          component={RecieveNewPassword}
          options={{
            headerShown: true,
            title: 'recebendo nova senha'
          }}

        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App