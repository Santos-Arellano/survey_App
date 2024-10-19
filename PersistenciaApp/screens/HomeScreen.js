import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  // Cargar valores RGB guardados desde AsyncStorage cuando se monta el componente
  useEffect(() => {
    const loadColor = async () => {
      try {
        const r = await AsyncStorage.getItem('red');
        const g = await AsyncStorage.getItem('green');
        const b = await AsyncStorage.getItem('blue');
        if (r !== null) setRed(parseInt(r));
        if (g !== null) setGreen(parseInt(g));
        if (b !== null) setBlue(parseInt(b));
      } catch (error) {
        console.error("Error loading color data", error);
      }
    };

    loadColor();
  }, []);

  // Guardar valores RGB en AsyncStorage
  const saveColor = async () => {
    try {
      await AsyncStorage.setItem('red', red.toString());
      await AsyncStorage.setItem('green', green.toString());
      await AsyncStorage.setItem('blue', blue.toString());
    } catch (error) {
      console.error("Error saving data", error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: `rgb(${red}, ${green}, ${blue})` }]}>
      <Text style={styles.title}>Selecciona el Color de Fondo</Text>
      <Text style={styles.label}>Rojo: {red}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={255}
        value={red}
        onValueChange={value => setRed(value)}
        onSlidingComplete={saveColor}
      />
      <Text style={styles.label}>Verde: {green}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={255}
        value={green}
        onValueChange={value => setGreen(value)}
        onSlidingComplete={saveColor}
      />
      <Text style={styles.label}>Azul: {blue}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={255}
        value={blue}
        onValueChange={value => setBlue(value)}
        onSlidingComplete={saveColor}
      />
      <Text style={styles.currentColor}>Color Actual: rgb({red}, {green}, {blue})</Text>
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
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  slider: {
    width: '100%', // Asegúrate de que el slider ocupe el ancho completo
    height: 40,
  },
  currentColor: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;