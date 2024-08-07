import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        resizeMode: "contain",
    },
    button: {
        backgroundColor: "yellow",
        color: "black",
        textAlign: "center",
        fontWeight: "700",
        padding: 15,
        borderRadius: 10,
        width: "100%",
        maxWidth: "80%",
    },
});

export default styles;
