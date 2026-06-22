import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";

// Navegação
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../Aula02_App";

// Componentes
import { CustomTextInput } from "../../Components/CustomTextInput";
import { RoundedButton } from "../../Components/RoundedButton";

// Estilo
import styles from "../../theme/HomeStyles";

// ViewModel
import HomeViewModel from "./ViewModel";

export const HomeScreen = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const { userEmail, userPassword, onChange, login } = HomeViewModel();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}
                    bounces={false}>

                    <Image
                        source={require("../../../../assets/bg-smartphone.jpg")}
                        style={styles.imgBg}
                    />

                    <View style={styles.frm}>
                        <Text style={styles.frmTitle}>
                            Entrar
                        </Text>

                        <CustomTextInput
                            image={require("../../../../assets/img/user.png")}
                            placeholder="Digite seu Email / Usuário..."
                            keyboardType="email-address"
                            secureTextEntry={false}
                            property="userEmail"
                            onChangeText={onChange}
                            value={userEmail}
                        />

                        <CustomTextInput
                            image={require("../../../../assets/img/password.png")}
                            placeholder="Digite sua senha..."
                            keyboardType="default"
                            secureTextEntry={true}
                            property="userPassword"
                            onChangeText={onChange}
                            value={userPassword}
                        />

                        <View style={{ marginTop: 30 }}>
                            <RoundedButton
                                text="Entrar"
                                onPress={() => login()}
                            />
                        </View>

                        <View style={styles.frmRegister}>
                            <Text>Crie sua conta!</Text>

                            <TouchableOpacity
                                onPress={() => navigation.navigate("RegisterScreen")}
                            >
                                <Text style={styles.txtRegister}>
                                    {" "}Registre-se
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.frmRegister}>
                            <Text>Esqueceu sua senha?</Text>

                            <TouchableOpacity
                                onPress={() => navigation.navigate("RecuperarScreen")}
                            >
                                <Text style={styles.txtRegister}>
                                    {" "}Alterar Senha
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
};

export default HomeScreen;