import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "7.5%",
        backgroundColor: "#007bff"
    },

    main: {
        width: "100%",
        height: "92.5%"
    },

    mainHeader: {
        width: "100%",
        height: "10%",
        backgroundColor: "gray",

        justifyContent: "center",
        alignItems: "center"
    },

    mainHeaderText: {
        color: "#F7F7F7",
        fontSize: width * 0.035
    },

    mainMain: {
        width: "100%",
        height: "80%"
    },

    mainFooter: {
        width: "100%",
        height: "10%",
        backgroundColor: "#F7F7F7",

        justifyContent: "center",
        alignItems: "center"
    },

    mainFooterText: {
        color: "gray",
        fontSize: width * 0.035
    }
})

const modalStyle = StyleSheet.create({
    container: {
        width,
        height: 150,
        backgroundColor: "#F7F7F7"
    },

    buttonsContainer: {
        width,
        height: 70,

        flexDirection: "row"
    },

    button: {
        width: "50%",
        height: "100%",

        justifyContent: "center",
        alignItems: "center"
    },

    input: {
        width,
        height: 80,
        color: "gray",
        fontSize: width * 0.035,
        paddingHorizontal: 10
    },

    cancelButton: {
        color: "#bd2130",
        fontSize: width * 0.035
    },

    confirmButton: {
        color: "#007bff"
    }
})

export default styles;
export { modalStyle };