import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TextInput, Button, ToastAndroid, Alert, Platform, Touchable, TouchableOpacity, ScrollView } from 'react-native';

// importação dos elementos de navegação
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../Aula02_App";
import { useNavigation } from "@react-navigation/native";

//componentes

import { CustomTextInput } from "../../Components/CustomTextInput";
import { RoundedButton } from "../../Components/RoundedButton";
import styles from "../../theme/HomeStyles";
//views models
import useViewModel from './ViewModel';


export const HomeScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const { userEmail, userPassword, onChange, login } = useViewModel();

  const testOS = () => {
    if (Platform.OS === 'android') {

      // Android: mostra o toast negativo
      ToastAndroid.show('Testando o Login! - Android', ToastAndroid.SHORT)
    }
    else if (Platform.OS === 'web') {

      // Navegador: Usa o alert do JS Classico
      alert('Testando o Login! - Web')
    }
    else {

      // iOS: Usa o Alert nativo do iPhone
      Alert.alert('Aviso!', 'Testando o Login! - iPhone')
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imageFundo}
        source={require('../../../../assets/img/bg-smartphone.jpg')} />

      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImg}
          source={require("../../../../assets/img/logo.png")}
        />
        <View style={styles.logoTxtContainer} >
          <Text style={styles.logoTxt} >
            Restalrante | Pizzaria Tito 😋
          </Text>
        </View>
      </View>
      <View style={styles.frm}>

        <ScrollView 
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        bounces={false}
        
        >
        
          <Text style={styles.frmTitle} >
            Entrar
          </Text>




          <CustomTextInput
            image={require('../../../../assets/img/user.png')}
            placeholder="Digite seu Email / Usuario..."
            keyboardType="email-address"
            secureTextEntry={false}
            property="userEmail"
            onChangeText={onChange}
            value={userEmail}
          />

          <CustomTextInput
            image={require('../../../../assets/img/password.png')}
            placeholder="Digite sua senha..."
            keyboardType="default"
            secureTextEntry={true}
            property="userPassword"
            onChangeText={onChange}
            value={userPassword}
          />

          <View style={styles.btnEntrar}>
            <RoundedButton
              text="Entrar"
              onPress={() => login()}
            //onPress={() => ToastAndroid.show('Entrando...', ToastAndroid.SHORT)}
            />
          </View>
          <View style={styles.frmRegister}>
            <Text style={styles.frmText}>
              Crie sua conta
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={styles.txtRegister}>
                Registre-se
              </Text>
            </TouchableOpacity>

          </View>

          <View style={styles.frmTextSenha}>
            <Text style={styles.frmText}>
              Esqueceu a senha?
            </Text>
          </View>

          <View style={styles.frmRecuperar}>

            <TouchableOpacity onPress={() => navigation.navigate('RecuperarScreen')}>
              <Text style={styles.txtRegister}>
                Clique Aqui
              </Text>
            </TouchableOpacity>

            <Text style={styles.frmText}> casso tenha perdido 👈</Text>

          </View>

        </ScrollView>

      </View>
    </View>
  );
};

export default HomeScreen;