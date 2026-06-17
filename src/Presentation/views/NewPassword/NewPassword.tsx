import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ToastAndroid, Platform } from 'react-native';

//importação dos elementos de navegação
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../Aula02_App";
//componentes
import { Color } from "./../../theme/AppTheme";
import { CustomTextInput } from "../../Components/CustomTextInput";
import { RoundedButton } from '../../Components/RoundedButton'
//views models
import NewViewModel from "./ViewModel";

export const RecieveNewPassword = () => {

  const { userToken, userConfirmePassword, userEmail, userNewPassword, onChange, login } = NewViewModel();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

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
          source={require("../../../../assets/img/user_menu.png")}
        />
        <View style={styles.logoTxtContainer} >
          <Text style={styles.logoTxt} >
            Recuperar Senha
          </Text>
        </View>
      </View>
      <View style={styles.frm}>
        <Text style={styles.frmTitle} >
          Recuperar Senha
        </Text>

        <Text style={styles.ftmInfo}>
          Digite seu email e uma nova senha para enviarmos um token para o email requerido
        </Text>

        <CustomTextInput
          image={require('../../../../assets/img/price.png')}
          placeholder="Digite o Token recebido"
          keyboardType="default"
          secureTextEntry={false}
          property="userToken"
          onChangeText={onChange}
          value={userToken}
        />

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
          placeholder="Digite sua Nova senha..."
          keyboardType="default"
          secureTextEntry={true}
          property="userNewPassword"
          onChangeText={onChange}
          value={userNewPassword}
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
            text="New Password"
            onPress={() => {
              login();
              navigation.navigate('HomeScreen')

            }}
          />
        </View>

      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.bgBlack,
    alignItems: 'center',
    justifyContent: 'center',

  },
  imageFundo: {
    width: '100%',
    height: '100%',
    opacity: 0.6,
    bottom: '30%',
  },
  logoContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: '5%',
  },
  logoImg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  logoTxtContainer: {
    width: '100%',
    height: 50,
    marginTop: 15,
    borderRadius: 15,
    opacity: 0.85,
  },
  logoTxt: {
    color: Color.bgColor,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 6,
  },
  frm: {
    width: '100%',
    height: '75%',
    backgroundColor: Color.bgColor,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  frmTitle: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  ftmInfo: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 19,
  },
  btnEntrar: {
    alignSelf: 'center',
    width: '100%',
    marginTop: 30,
    cursor: 'pointer',
  },

}
)

export default RecieveNewPassword;
