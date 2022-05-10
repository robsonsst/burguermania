import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
} from "react-native";

//import { useNavigation } from '@react-navigation/native';

export default function Favorites() {
    return (
        <View style={styles.container}>
            <Text>Página de favoritos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#FFF",
    },
    header: {
        marginBottom: 8,
        backgroundColor: "#FFF",
        height: "16%",
    },
    imageLogo: {
        alignSelf: "center",
        width: "38%",
        height: "59%",
        margin: "11%",
    },
    image: {
        alignSelf: "flex-start",
        width: "38%",
        height: "59%",
        margin: "11%",
    },
    nome: {
        color: "#FFF",
    },
    descricao: {
        color: "#FFF",
    },
    preco: {
        color: "#FFF",
    },
});