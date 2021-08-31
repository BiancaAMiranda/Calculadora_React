import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/componentes/Header';
import Content from './src/componentes/Content';

export default function App() {
  return (
    <View>
      <Header/>
      <Content/>
      <StatusBar style="auto" />
    </View>
  );
}
