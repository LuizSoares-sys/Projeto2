import React, {useState} from "react";
import { StyleSheet, View, Text, Image, TextInput, Button, ToastAndroid, Alert, Platform, Touchable, TouchableOpacity, KeyboardType } from 'react-native';

// importação dos elementos de navegação
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import { useNavigation } from "@react-navigation/native";

//componentes
import { Color } from "../../theme/AppTheme";
import { CustomTextInput } from "../../Components/CustomTextInput";
import { RoundedButton } from "../../Components/RoundedButton";
//views models
import useViewModel from './ViewModel';

export const HomeScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const {userEmail, userPassword, onChange, login} = useViewModel();

  const testOS = () => {
    if(Platform.OS === 'android'){

      // Android: mostra o toast negativo
      ToastAndroid.show('Testando o Login! - Android', ToastAndroid.SHORT)
    } 
    else if (Platform.OS === 'web') {

      // Navegador: Usa o alert do JS Classico
      alert('Testando o Login! - Web')
    }
      else {

      // iOS: Usa o Alert nativo do iPhone
      Alert.alert('Aviso!','Testando o Login! - iPhone')
    }
  };

  return(
<View style={styles.container}>
      <Image style = {styles.imageFundo}
        source={require("../../../../assets/bg-smartphone.jpg")}/>

      <View style={styles.logoContainer}>
      <Image
        style={styles.logoImg}
        source={require("../../../../assets/img/logo.png")}
      />
        <View style={styles.logoTxtContainer} >
          <Text style={ styles.logoTxt} >
          Restaurante | Pizzaria Tito 😋
          </Text>
        </View>
      </View>
    <View style={styles.frm}>      
      <Text style={ styles.frmTitle} >
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
      
        <View style={styles.btnEntrar }>
          <RoundedButton
          text="Entrar"
          onPress={ () => login() }
          //onPress={() => ToastAndroid.show('Entrando...', ToastAndroid.SHORT)}
          />
        </View>
        <View style={styles.frmRegister}>
  <Text>
    Crie sua conta
  </Text>

  <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
    <Text style={styles.txtRegister}>
      Registre-se
    </Text>
  </TouchableOpacity>

  <Text> 👈 </Text>

  <TouchableOpacity onPress={() => navigation.navigate('RecuperarScreen')}>
    <Text style={styles.txtRegister}>
      Recuperar senha
    </Text>
  </TouchableOpacity>

  <Text> 👈 </Text>
</View>
      </View>
    </View>  
  );
};
 
// Folha de estilo
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Color.bgBlack,
    alignItems: 'center',
    justifyContent:'center',

  },
  imageFundo:{
    width: '100%',
    height: '100%',
    opacity: 0.6,
    bottom: '30%',
  },
  logoContainer:{
    position: 'absolute',
    alignItems: 'center',
    top: '15%',
  },
  logoImg:{
    width: 150,
    height: 150,
    alignSelf: 'center',
    transform: [{ rotateZ: '6deg' }],
  },
  logoTxtContainer:{
    width: '110%',
    height: 50,
    marginTop: 15,
    borderRadius: 15,
    opacity: 0.85,        
  },
  logoTxt:{
    color: Color.bgColor,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 6,
  },
  frm:{
    width: '100%',
    height: '40%',
    backgroundColor: Color.bgColor,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  frmTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  btnEntrar:{
    alignSelf: 'center',
    width: 300,
    marginTop: 30,
    cursor: 'pointer',
  },
  frmRegister:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  txtRegister:{
    fontStyle: 'italic',
    fontWeight: 'bold',
    borderBottomColor: Color.secondary,
    borderBottomWidth: 1,
    marginLeft: 5,
    color: Color.secondary,
    
  },
});

//export default HomeScreen
 
export default HomeScreen;
 