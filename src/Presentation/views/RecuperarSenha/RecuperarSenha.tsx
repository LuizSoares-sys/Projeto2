import React, { useState } from "react";
import { StyleSheet, View, Text, Image, } from 'react-native';

//importação dos elementos de navegação
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../Aula02_App";
//componentes
import { Color } from "../../theme/AppTheme";
import { CustomTextInput } from "../../Components/CustomTextInput";
import { RoundedButton } from '../../Components/RoundedButton'

import RecuperarViewModel from './ViewModel';

export const RecuperarScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const { userEmail, onChange, login } = RecuperarViewModel();

  return (
    <View style={styles.container}>
      <Image style={styles.imageFundo}
        source={require('../../../../assets/img/city.jpg')} />

      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImg}
          source={require("../../../../assets/img/password.png")}
        />
        <View style={styles.logoTxtContainer} >
          <Text style={styles.logoTxt} >
            Recuperar senha
          </Text>
        </View>
      </View>
      <View style={styles.frm}>
        <Text style={styles.frmTitle} >
          Recuperar senha
        </Text>

        <Text style={styles.ftmInfo}>
          Digite seu email e uma nova senha para receber um token no seu email
        </Text>

        <CustomTextInput
          image={require('../../../../assets/img/user.png')}
          placeholder="Digite seu Email"
          keyboardType="default"
          secureTextEntry={false}
          property="userEmail"
          onChangeText={onChange}
          value={userEmail}
        />

        <View style={styles.btnEntrar}>
          <RoundedButton
            text="Send to Email"
            onPress={() => {
              login()
              navigation.navigate('RecieveNewPassword')

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
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 50,
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
    height: '40%',
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

export default RecuperarScreen;