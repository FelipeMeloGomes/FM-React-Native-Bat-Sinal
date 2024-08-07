import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        width: "100%",
    },
    imgContainer: {
        display: "flex",
        justifyContent: "center",
        height: "20%",
        marginBottom: 10,
    },
    image: {
        width: 100,
        resizeMode: "contain",
    },
    Input: {
        color: "white",
        textAlign: "left",
        fontWeight: "700",
        padding: 15,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        width: "100%",
        maxWidth: "80%",
    },
    InputText: {
        display: "flex",
        color: "white",
        textAlign: "left",
        maxWidth: "80%",
        width: "100%",
        padding: 15,
    },
    button: {
        marginTop: 20,
        backgroundColor: "yellow",
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
        padding: 15,
        borderRadius: 10,
        width: "100%",
        maxWidth: "80%",
    },
});

export default styles;
