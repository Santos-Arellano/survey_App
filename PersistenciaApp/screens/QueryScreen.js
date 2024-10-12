import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const QueryScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  // Obtener los valores almacenados al cargar la pantalla
  useEffect(() => {
    const fetchData = async () => {
      const r = await AsyncStorage.getItem('red');
      const g = await AsyncStorage.getItem('green');
      const b = await AsyncStorage.getItem('blue');
      if (r !== null) setRed(parseInt(r));
      if (g !== null) setGreen(parseInt(g));
      if (b !== null) setBlue(parseInt(b));
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Valores guardados:</Text>
      <Text>Red: {red}</Text>
      <Text>Green: {green}</Text>
      <Text>Blue: {blue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QueryScreen;
