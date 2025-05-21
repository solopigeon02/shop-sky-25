import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { fetchAllCategories } from './utils/api';
import { useState } from 'react';
import { Greeting } from './screens/Greeting';

export default function App() {

  const fetchData = async () => {
    const data = await fetchAllCategories();
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Greeting name="Sky Group" tafe="Hornsby"/>
      <StatusBar style="auto" />
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
