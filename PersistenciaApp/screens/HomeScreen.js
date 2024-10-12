import React, { useState, useEffect } from 'react';
import { View, Text, Slider, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  // Al cargar la pantalla, obtener los valores almacenados
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

  // Guardar valores de color en AsyncStorage
  const saveColor = async () => {
    await AsyncStorage.setItem('red', red.toString());
    await AsyncStorage.setItem('green', green.toString());
    await AsyncStorage.setItem('blue', blue.toString());
  };

  return (
    <View style={[styles.container, { backgroundColor: `rgb(${red}, ${green}, ${blue})` }]}>
      <Text>Red: {red}</Text>
      <Slider
        minimumValue={0}
        maximumValue={255}
        value={red}
        onValueChange={value => setRed(value)}
        onSlidingComplete={saveColor}
      />
      <Text>Green: {green}</Text>
      <Slider
        minimumValue={0}
        maximumValue={255}
        value={green}
        onValueChange={value => setGreen(value)}
        onSlidingComplete={saveColor}
      />
      <Text>Blue: {blue}</Text>
      <Slider
        minimumValue={0}
        maximumValue={255}
        value={blue}
        onValueChange={value => setBlue(value)}
        onSlidingComplete={saveColor}
      />
      <Button title="Consultar Datos" onPress={() => navigation.navigate('Query')} />
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
});

export default HomeScreen;
