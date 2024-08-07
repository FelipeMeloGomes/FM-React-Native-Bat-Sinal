import React from "react";
import { Image, StatusBar, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styles from "./styles";

type RootStackParamList = {
    Home: undefined;
    Form: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

import LogoBatman from "../../assets/logoBatman.png";

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={LogoBatman} />
            <StatusBar barStyle="light-content" />
            <Text
                style={styles.button}
                onPress={() => navigation.navigate("Form")}
            >
                Ativar Bat Sinal
            </Text>
        </View>
    );
};

export default HomeScreen;
