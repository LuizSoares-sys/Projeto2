import React from "react";
import { StyleSheet, View, Text, Image, TextInput, Button, ToastAndroid, Platform, Alert } from 'react-native';
import { RoundedButton } from "../../Components/RoundedButton";
import { Color } from "../../theme/AppTheme";

export const HomeScreen = () => {

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
        source={require('../../../../assets/bg-smartphone.jpg')}/>

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
        Entrar ⭐
      </Text>
      <View style={styles.frmInput}>

        <Image 
        style={ styles.frmicon} 
        source = { require("../../../../assets/img/user.png") }/>
        
        <TextInput 
        style={styles.txtInput} 
        placeholder="Digite seu email / Usuário" 
        keyboardType='email-address'
        />
</View>   
      <View style={styles.frmInput}>

        <Image 
        style={ styles.frmicon} 
        source = { require("../../../../assets/img/password.png") }/>
        
        <TextInput 
        style={styles.txtInput}
        placeholder="Digite sua senha..." 
        keyboardType="default"
        secureTextEntry={true}
        />
        </View>
        <View style={styles.btnEntrar }>
          <RoundedButton
          text="Entrar"
          onPress={testOS}
          //onPress={() => ToastAndroid.show('Entrando...', ToastAndroid.SHORT)}
          />
        </View>
        <View style={styles.frmRegister}>
          <Text>
            Crie sua conta
          </Text>
          <Text style={styles.txtRegister}> 
            Registre-se
          </Text>
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
    backgroundColor: '#000',
    marginTop: 15,
    borderRadius: 15,
    opacity: 0.85,        
  },
  logoTxt:{
    color: Color.primary,
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
    fontSize: 35,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  frmInput:{
    flexDirection: 'row',
    marginTop:30,
  },
  frmicon:{
    width: 25,
    height: 25,
    marginTop: 10,
  },
  txtInput:{
    flex: 1,
    borderBottomWidth: 2,
    marginLeft: 15,
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
 