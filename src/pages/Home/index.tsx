import React, { Fragment, useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity as TO, TextInput, Vibration } from "react-native";
import { Modalize } from "react-native-modalize";
import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner, BarCodeEvent } from "expo-barcode-scanner";
import { Camera } from "expo-camera";

import styles, { modalStyle } from "./styles";

function Home() {

    const navigation = useNavigation();

    const [scanned, setScanned] = useState<boolean>(false);
    const [barCode, setBarCode] = useState<string>('');
    const [hasCameraPermission, setHasCameraPermission] = useState<boolean>(false);

    const insertCodeModalizer = useRef<Modalize>(null);

    function scan(evt: BarCodeEvent) {
        if (evt.type == "1") {
            Vibration.vibrate(200);
            setScanned(true);
            navigateScanned(evt.data);
        }
    }

    function navigateScanned(value: string) {
        setTimeout(() => {
            (navigation as any).navigate("invoice", { code: value });
        }, 300)
    }

    function handleInsertCode() {
        if (insertCodeModalizer.current) {
            insertCodeModalizer.current.open();
        }
    }

    function handleCancelInsert() {
        if (insertCodeModalizer.current) {
            insertCodeModalizer.current.close();
        }
    }

    useEffect(() => {
        async function run() {
            try {
                const { status } = await Camera.requestCameraPermissionsAsync();
                if (status === "granted") {
                    setHasCameraPermission(true);
                } else {
                    alert("Você deve permitir acesso a camera");
                }
            } catch(err) {
                alert(err);
            }
        }
        run();
    }, [])

    if (!hasCameraPermission) {
        return <View/>
    }

    return <Fragment>
        <View style={styles.header}/>
        <View style={styles.main}>
            <View style={styles.mainHeader}>
                <Text style={styles.mainHeaderText}>Escaneie o código de barras da nota</Text>
            </View>
            <BarCodeScanner
                style={styles.mainMain}
                onBarCodeScanned={scanned ? undefined : scan}
            />
            <View style={styles.mainFooter}>
                <TO onPress={handleInsertCode}>
                    <Text style={styles.mainFooterText}>Inserir o código de barras</Text>
                </TO>
            </View>
        </View>
        <Modalize
            ref={insertCodeModalizer}
            modalStyle={modalStyle.container}
            snapPoint={400}
            modalHeight={400}
            onClose={() => setBarCode("")}
        >
            <TextInput
                style={modalStyle.input}
                placeholder="Digite o código aqui"
                placeholderTextColor="gray"
                keyboardType="number-pad"
                value={barCode}
                onChangeText={txt => setBarCode(txt)}
            />
            <View style={modalStyle.buttonsContainer}>
                <TO
                    style={modalStyle.button}
                    onPress={handleCancelInsert}
                >
                    <Text style={modalStyle.cancelButton}>Cancelar</Text>
                </TO>
                <TO style={modalStyle.button} onPress={() => navigateScanned(barCode)}>
                    <Text style={modalStyle.confirmButton}>Confirmar</Text>
                </TO>
            </View>
        </Modalize>
    </Fragment>
}

export default Home;