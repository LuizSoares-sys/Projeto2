import React from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Platform, ToastAndroid } from 'react-native';
import { Color } from "../../theme/AppTheme";
import { RoundedButton } from "../../Components/RoundedButton";

export const RecuperarSenha = () => {
        if(Platform.OS === 'android'){
                    ToastAndroid.show('Testando o Cadastro! - Android', ToastAndroid.SHORT)
                }
    
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageFundo}
        source={require("../../../../assets/img/chef.jpg")}
      />

      <View style={styles.imageProfileContainer}>
        <Image
          style={styles.imageProfile}
          source={require("../../../../assets/img/user_image.png")}
        />

        <Text style={styles.imageProfileText}>
          Teste
        </Text>

      

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: Color.bgBlack,
    },
    imageFundo: {
    width: "100%",
    height: 320,
    opacity: 0.5,
  },

  imageProfileContainer: {
    position: "absolute",
    top: 110,
    width: "100%",
    alignItems: "center",
  },

  imageProfile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#FFF",
    padding: 20,
  },

  imageProfileText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },

  frm: {
    flex: 1,
    backgroundColor: Color.bgColor,
    marginTop: -35,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 25,
  },

  frmTitle: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 15,
  },
})