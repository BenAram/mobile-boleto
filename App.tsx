import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Stack from "./src/navigators/Stack";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Stack/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
