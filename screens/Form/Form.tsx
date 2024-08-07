import { View, Text, TextInput, Image } from "react-native";
import styles from "./styles";
import logoBatman from "../../assets/logoBatman.png";

export default function Form() {
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.image} source={logoBatman} />
            </View>
            <Text style={styles.InputText}>Nome:</Text>
            <TextInput
                style={styles.Input}
                keyboardType="name-phone-pad"
                placeholder="Digite o seu nome"
                placeholderTextColor="white"
            />
            <Text style={styles.InputText}>Email:</Text>
            <TextInput
                style={styles.Input}
                keyboardType="email-address"
                placeholder="Digite o seu Email"
                placeholderTextColor="white"
            />
            <Text style={styles.InputText}>Telefone:</Text>
            <TextInput
                style={styles.Input}
                keyboardType="number-pad"
                placeholder="Digite seu Telefone"
                placeholderTextColor="white"
            />
            <Text style={styles.InputText}>Qual a emergência?</Text>
            <TextInput
                style={styles.Input}
                numberOfLines={4}
                placeholder="Descreva a emergência?"
                placeholderTextColor="white"
            />
            <Text style={styles.button}>Enviar</Text>
        </View>
    );
}
