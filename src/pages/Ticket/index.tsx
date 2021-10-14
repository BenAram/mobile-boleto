import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableWithoutFeedback as TWF } from "react-native";
import { useRoute } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome5, Feather } from "@expo/vector-icons";

import styles from "./styles";

function treatDate(date: Date): string {
    function treatValue(value: number): string {
        if (value > 9) {
            return `${value}`;
        } else {
            return `0${value}`;
        }
    }

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${treatValue(day)}/${treatValue(month)}/${year}`;
}

function Ticket() {

    const { params } = useRoute() as any;

    const [name, setName] = useState<string>("");
    const [dueDate, setDueDate] = useState<Date>(new Date());
    const [ticketCode, setTicketCode] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [showDateTimePicker, setShowDateTimePicker] = useState<boolean>(false);

    function handleActiveDate() {
        setShowDateTimePicker(true);
    }

    useEffect(() => {
        if (params) {
            setTicketCode(params.code);
        }
    }, [])

    return <View style={styles.container}>
        <Text style={styles.title}>Preencha os dados do boleto</Text>
        <View style={styles.inputContainer}>
            <View style={styles.inputIcon}>
                <FontAwesome5
                    size={20}
                    name="signature"
                    color="#007bff"
                />
            </View>
            <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="Nome do boleto"
                value={name}
                onChangeText={txt => setName(txt)}
            />
        </View>
        <View style={styles.inputContainer}>
            <View style={styles.inputIcon}>
                <Feather
                    size={20}
                    name="x-circle"
                    color="#007bff"
                />
            </View>
            <TWF onPress={handleActiveDate}>
                <Text style={styles.input}>{treatDate(dueDate)}</Text>
            </TWF>
        </View>
        <View style={styles.inputContainer}>
            <View style={styles.inputIcon}>
                <FontAwesome5
                    size={20}
                    name="wallet"
                    color="#007bff"
                />
            </View>
            <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="Valor"
                keyboardType="number-pad"
                value={price}
                onChangeText={txt => setPrice(txt)}
            />
        </View>
        <View style={styles.inputContainer}>
            <View style={styles.inputIcon}>
                <FontAwesome5
                    size={20}
                    name="ticket-alt"
                    color="#007bff"
                />
            </View>
            <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="Código"
                keyboardType="number-pad"
                value={ticketCode}
                onChangeText={txt => setTicketCode(txt)}
            />
        </View>
        {showDateTimePicker ? <DateTimePicker
            value={dueDate}
            mode="date"
            onChange={(_: any, newDate: any) => {
                setShowDateTimePicker(false);
                if (newDate) {
                    setDueDate(newDate);
                }
            }}
        /> : null}
    </View>
}

export default Ticket;