import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button, Image, Dimensions, ActivityIndicator, Alert } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

// pegamos a largura e a altura da tela para garantir as dimensões corretas da foto
const { width, height } = Dimensions.get('window');

//Variavel para controlar o ambiente (true = simula no front/ false = envia pro servidor real)
const isTestMode = true;

export default function App() {
    const [permission, requestPermission] = useCameraPermissions();
    const [captureImage, setCaptureImage] = useState<string | null>(null);
    const [isUploading, setUploading] = useState(false);
    const cameraRef = useRef<any>(null);

    if (!permission) {
        return (
            <View style={styles.container}>
                <Text style={styles.textLight}>
                    Carregando permissões...
                </Text>
            </View>
        );
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.textLight}>
                    Precisamos da sua permissão para mostrar a câmera!
                </Text>
                <Button
                    onPress={requestPermission}
                    title="Conceder Permissão"
                />
            </View>
        );
    }

    const takePicture = async () => {
        if (cameraRef.current) {
            // skipProcessing garante que o android processe a imagem antes de entregar o URI
            const option = { quality: 0.8, skipProcessing: false };

            const photo = await cameraRef.current.takePictureAsync(option);

            if (photo && photo.uri) {
                console.log('Foto tirada com sucesso! Caminho:', photo.uri);
                setCaptureImage(photo.uri);
            }
        }
    };

    const uploadImage = async () => {

        if (!captureImage) return;

        setUploading(true);

        try {
            if (isTestMode) {
                /* Modo de teste */
                console.log('modo de teste ativo: Simulando o Upload...');

                //Simula o tempo de uma requisição de rede "2 segundos"
                await new Promise(resolve => setTimeout(resolve, 2000));

                console.log('Upload simulado com sucesso! A imagem está pronta para ser isada no app.')

                Alert.alert('Sucesso', 'Sua foto de perfil foi atualizada (Modo Teste)!')

                // A partir daqui pode ser utilizada e atualizada e atualizada a foto na UI, no Context ou Redux

            }
            else {

                /* Modo de produção (comunicação com Backend)*/

                // 1. Resolve o erro do " Unsupported FormDataPart" transforma o arquivi local em um Blob padrão da Web
                const localImageResponse = await fetch(captureImage)
                const blob = await localImageResponse.blob();

                // 2. Cria o FormData e anexa o blob (usando o padrão web que as versões novas do Expo exigem)
                const formData = new FormData();
                formData.append('profilePicture', blob, 'profile.jpg');

                const UPLOAD_URL = "https://sua-api/upload-endpoint"; // Subistitua quando TIVER A 'API'

                const response = await fetch(UPLOAD_URL, {
                    method: 'POST',

                    // Dica: Não coloque 'Content-type : ' mulpipart/form-data' aqui nos headers
                    // O fetch cuida de gerar os 'boundaries' corretamente se você não forçar manualmente.
                    headers: {
                        // 'Authorization' : 'Bearer SEU_TOKEN_USUARIO' ---Para usuários autenticados

                    },

                    body: formData

                });

                if (response.ok) {
                    const data = await response.json();

                    console.log('Upload concluido no servidor: ', data);
                    Alert.alert('Sucesso', 'Sua foto de perfil foi atualizada! - (BackEnd)');
                }
                else {
                    Alert.alert('ERRO', "Não foi possivel salvar a imagem no servidor");
                }
            }
        }
        catch (error) {
            console.error('Erro no upload: ', error);
            Alert.alert('Erro', 'Falha na conexão com o servidor.');
        }
        finally {
            setUploading(false); // Esconde o loading, independentemente de dar erro ou sucesso
        }
    };

    return (
        <View style={styles.container}>
            {captureImage ? (
                //Tela de preview da foto
                <View style={styles.previewContainer}>
                    <Image
                        source={{ uri: captureImage }}
                        style={styles.preview}
                        resizeMode="cover" // garante que a foto preencha o espaço total do smartphone
                    />
                    <View style={styles.previewButtons}>
                        {isUploading ? (
                            <ActivityIndicator size='large' color='#00ff00' />
                        ) : (
                            <>
                                <Button title="Usar como foto de perfil" onPress={uploadImage} color='#28a745' />
                                <View style={{ marginTop: 10, }}>
                                    <Button title="Tirar outra foto" onPress={() => setCaptureImage(null)} color='#dc3545' />
                                </View>
                            </>
                        )}
                        
                    </View>
                </View>
            ) : (
                // tela da câmera
                <View style={styles.cameraContainer}>
                    {
                        /*
                        no facing para mudar a camera voce escreve no
                        (facing="back") para a camera trazeira,
                        (facing="front") ára camera frontal
                        */
                    }
                    <CameraView style={styles.camera} facing="front" ref={cameraRef} />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={takePicture}
                        >
                            <Text style={styles.textBtn}>Tirar Foto</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    textLight: {
        color: '#fff',
        textAlign: 'center',
    },
    cameraContainer: {
        flex: 1,
        width: '100%',
        position: 'relative',
    },
    camera: {
        flex: 1,
        width: '100%',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 30,
        elevation: 5,
        borderRadius: 30,
    },
    textBtn: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    previewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    //parte importante
    preview: {
        width: width * 0.05,
        height: height * 0.70,
        borderRadius: 12,
    },
    previewButtons: {
        marginTop: 20,
        width: '80%',
    },
})