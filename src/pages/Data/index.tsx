import React from "react";
import { View, TouchableOpacity as TO, ScrollView, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";

import styles from "./styles";

interface Data {
    name: string
    value: string
}

function Invoice() {

    const { params } = useRoute();
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return <View style={styles.container}>
        <View style={styles.header}>
            <TO onPress={handleGoBack}>
                <Feather
                    name="arrow-left"
                    color="#FFF"
                    size={24}
                />
            </TO>
        </View>
        <ScrollView style={styles.main}>
            {(params as any).data.map((data: Data, index: number) => {
                return <View key={index} style={styles.content}>
                    <Text style={styles.name}>{data.name}{': '}</Text>
                    <Text style={styles.value}>{data.value}</Text>
                </View>
            })}
        </ScrollView>
    </View>
}

export default Invoice;