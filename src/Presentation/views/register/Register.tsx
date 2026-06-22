import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TextInput, ToastAndroid, Platform, TouchableOpacity } from 'react-native';

//importação dos elementos de navegação
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./../../../../Aula02_App";
//componentes
import styles from "../../theme/RegisterStyles"
import { CustomTextInput } from "../../Components/CustomTextInput";
import { RoundedButton } from "../../Components/RoundedButton";
//views models
import useViewModel from './ViewModel';

export const RegisterScreen = () => {

  const { userTrueName, userName, userConfirmePassword, userPhone, userEmail, userPassword, onChange, login } = useViewModel();

  const OS = () => {
    if (Platform.OS === 'android') {

      ToastAndroid.show('Cadastro feito! - Android', ToastAndroid.SHORT)
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imageFundo}
        source={require('../../../../assets/img/chef.jpg')} />

      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImg}
          source={require("../../../../assets/img/user_image.png")}
        />
        <View style={styles.logoTxtContainer} >
          <Text style={styles.logoTxt} >
            Selecione uma imagem
          </Text>
        </View>
      </View>
      <View style={styles.frm}>
        <Text style={styles.frmTitle} >
          Registre-se
        </Text>

        <CustomTextInput
          image={require('../../../../assets/img/user.png')}
          placeholder="Digite seu Nome"
          keyboardType="default"
          secureTextEntry={false}
          property="userName"
          onChangeText={onChange}
          value={userTrueName}
        />

        <CustomTextInput
          image={require('../../../../assets/img/my_user.png')}
          placeholder="Digite seu Nome de usuario"
          keyboardType="default"
          secureTextEntry={false}
          property="userNameUser"
          onChangeText={onChange}
          value={userName}
        />

        <CustomTextInput
          image={require('../../../../assets/img/email.png')}
          placeholder="Digite seu Email"
          keyboardType="default"
          secureTextEntry={false}
          property="userEmail"
          onChangeText={onChange}
          value={userEmail}
        />
        <CustomTextInput
          image={require('../../../../assets/img/phone.png')}
          placeholder="Digite seu Telefone"
          keyboardType="numeric"
          secureTextEntry={false}
          property="userPhone"
          onChangeText={onChange}
          value={userPhone}
        />
        <CustomTextInput
          image={require('../../../../assets/img/password.png')}
          placeholder="Digite sua senha..."
          keyboardType="default"
          secureTextEntry={false}
          property="userPassword"
          onChangeText={onChange}
          value={userPassword}
        />

        <CustomTextInput
          image={require('../../../../assets/img/confirm_password.png')}
          placeholder="confirme sua senha"
          keyboardType="default"
          secureTextEntry={true}
          property="userConfirmePassword"
          onChangeText={onChange}
          value={userConfirmePassword}
        />

        <View style={styles.btnEntrar}>
          <RoundedButton
            text="Cadastre-se"
            onPress={() => login()}
          />
        </View>
      </View>
    </View>

  )

}


export default RegisterScreen;