//Cria um arquivo para componente de Botões
// ./src/Components/RoundedButton.tsx
import  React  from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Color } from "../theme/AppTheme";

interface Props {
    text: string,
    onPress: () => void;
}


export const RoundedButton = ( { text, onPress }: Props) => {
    return (
        <TouchableOpacity
            onPress={ onPress }
            style = { styles.bnt}>
                <Text style={ styles.txtBnt}>{ text }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bnt:{
        width: '100%',
        height: 50,
        backgroundColor: Color.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    txtBnt:{
        color: Color.bgColor,
        fontWeight: 'bold',
        fontSize: 16
    },
})