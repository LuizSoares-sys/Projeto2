import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ActivityIndicator, ImageBackground } from "react-native";
import * as Location from 'expo-location';

export default function App() {

    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function buscaLocalizacao() {

            try {
                // pede permissão ao usuario
                let { status } = await 
                Location.requestForegroundPermissionsAsync();

                if (status !== 'granted') {
                    setErrorMsg('permissão para acessar a localização foi negada!');
                    setLoading(false);
                    return;
                }

                //Busca a ultima posicao salva(é instantaneo e evita load eterno do emulador)
                let currentLocation = await 
                Location.getLastKnownPositionAsync();

                if (!currentLocation) {

                    currentLocation = await 
                    Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest});

                }

                setLocation(currentLocation);

            }

            catch (error) {

                setErrorMsg('Erro ao tentar buscar a localização!');

            }

            finally {

                setLoading(false);

            }

        }

        buscaLocalizacao();

    }, []);

    //Mostra um aviso se der erro ou permissao negada
    if (errorMsg) {
        return (
            <View style={styles.container}>
                <Text style={styles.erroText}>{errorMsg}</Text>
            </View>
            
        );
    }

    if (loading) {

        return (

            //Moostra o loading enquanto tenta achar as cordenadas
            <View style={styles.container}>
                <ActivityIndicator size={'large'} color={'#0000ff'} />
                <Text style={styles.loadingText}> Buscando satelites</Text>
            </View>

        );

    }

    // Deu certo! mostrar as cordenadas na tela

    const IMAGE_URL = 'https://png.pngtree.com/thumb_back/fh260/background/20250711/pngtree-futuristic-gps-navigation-network-map-with-glowing-red-location-pins-image_17608261.webp';

    return (
        <ImageBackground source={{ uri: IMAGE_URL }} style={styles.background} resizeMode="cover">
            <View style={styles.containerContent}>
                <Text style={styles.title}>Sua Localização</Text>
                <View style={styles.card}>
                    <Text style={styles.text}>
                        <Text style={styles.bold}>Latitude: </Text>  {location?.coords.latitude}
                    </Text>
                    <Text style={styles.text} >
                        <Text style={styles.bold}>Longitude:</Text> {location?.coords.longitude}
                    </Text>
                    <Text style={styles.text}>
                        <Text style={styles.bold}>Precisão: </Text> {location?.coords.accuracy?.toFixed(2)} metros
                    </Text>
                </View >
            </View>
        </ImageBackground>
    );

}

const styles = StyleSheet.create({
    loadingText:{},
    container:{ 
        flex: 1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent:'center',
    },
    erroText:{},
    title:{
        textAlign:'center',
        fontSize: 26,
        fontWeight: 'bold',
    },
    card:{ 
        width: '100%',
        height: '55%',
        backgroundColor: '#2540b8ff',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,
        borderWidth: 8,
        borderTopColor:'#1165b4ff',
        borderLeftColor:'#ff9900ff',
        borderEndColor:'#ff9900ff',
    },
    text:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 40,
    },
    bold:{
    textAlign:'center',
    fontSize: 38,
    fontWeight: 'bold', 
    },
    background: {
        flex: 1,
    },
    containerContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})