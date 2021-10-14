import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Data from "../pages/Data";
import Home from "../pages/Home";
import Invoice from "../pages/Invoice";
import Ticket from "../pages/Ticket";

function Stack() {
    const { Navigator, Screen } = createStackNavigator();

    return <NavigationContainer>
        <View style={{width:"100%",height:"100%"}}>
        <Navigator initialRouteName="home" screenOptions={{headerShown:false}}>
            <Screen name="home" component={Home} />
            <Screen name="data" component={Data} />
            <Screen name="invoice" component={Invoice} />
            <Screen name="ticket" component={Ticket} />
        </Navigator>
        </View>
    </NavigationContainer>
}

export default Stack;