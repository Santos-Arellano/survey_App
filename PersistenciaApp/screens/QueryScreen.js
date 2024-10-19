import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const QueryScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  // Obtener valores RGB desde AsyncStorage cuando se monta el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const r = await AsyncStorage.getItem('red');
        const g = await AsyncStorage.getItem('green');
        const b = await AsyncStorage.getItem('blue');
        if (r !== null) setRed(parseInt(r));
        if (g !== null) setGreen(parseInt(g));
        if (b !== null) setBlue(parseInt(b));
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  // Calcular el promedio de los valores RGB
  const calculateAverage = () => {
    return (red + green + blue) / 3; // Ejemplo de cálculo de promedio
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Valores Guardados:</Text>
      <Text style={styles.value}>Rojo: {red}</Text>
      <Text style={styles.value}>Verde: {green}</Text>
      <Text style={styles.value}>Azul: {blue}</Text>
      <Text style={styles.value}>Promedio: {calculateAverage().toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  value: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default QueryScreen;