import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#F7F7F7",

        paddingHorizontal: 25,
        paddingVertical: 50
    },

    title: {
        color: "gray",
        fontSize: width * 0.045,
        fontWeight: "bold",
        textAlign: "center"
    },

    inputContainer: {
        width: "100%",
        height: 30,
        marginVertical: 15,
        borderBottomColor: "gray",
        borderBottomWidth: 2,

        flexDirection: "row"
    },

    inputIcon: {
        width: "15%",
        height: "100%",
        borderRightColor: "gray",
        borderRightWidth: 2,

        justifyContent: "center",
        alignItems: "center"
    },

    input: {
        width: "85%",
        height: "100%",
        paddingHorizontal: 5,
        color: "gray",
        fontSize: width * 0.035
    }
})

export default styles;