import React from "react";
import { View, TouchableOpacity as TO } from "react-native";
import { Feather } from "@expo/vector-icons";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import { useRoute, useNavigation } from "@react-navigation/native";

import styles from "./styles";
import inject from "./inject";

function Invoice() {

    const { params } = useRoute();
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    function handleMessage(evt: WebViewMessageEvent) {
        navigation.navigate("data", { data: JSON.parse(evt.nativeEvent.data) });
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
        <WebView
            style={styles.main}
            source={{ uri: "https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=resumo&tipoConteudo=d09fwabTnLk=" }}
            injectedJavaScript={inject.replace("{code}", (params as any).code)}
            onMessage={handleMessage}
        />
    </View>
}

export default Invoice;