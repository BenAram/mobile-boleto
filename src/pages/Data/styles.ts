import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },

    header: {
        width: "100%",
        height: "10%",
        backgroundColor: "#007bff",

        paddingHorizontal: 15,
        justifyContent: "center",
        alignItems: "flex-start"
    },

    main: {
        width: "100%",
        height: "90%"
    },

    content: {
        flexDirection: 'row'
    },

    name: {
        fontSize: width * 0.035,
        color: '#007bff'
    },

    value: {
        fontSize: width * 0.035,
        color: '#000'
    }
})

export default styles;