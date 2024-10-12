# TC2007B: Manejo de Datos Persistentes

## Semestral Ago-Dic 2024

### Propósito
El objetivo de esta actividad es utilizar las clases proporcionadas por el SDK de React Native para construir aplicaciones que guarden datos de manera persistente.

### Instrucciones

#### 1. Actividad previa
Consulta los siguientes recursos sobre persistencia de datos:

- [Datos y archivos de la app (Android)](https://developer.android.com/guide/topics/data/data-storage?hl=es)
- [Preferencias del usuario en iOS](https://developer.apple.com/documentation/foundation/userdefaults)
- [MMKV (Alternativa a AsyncStorage)](https://github.com/Tencent/MMKV)
- [SQLite Expo React Native](https://docs.expo.dev/versions/latest/sdk/sqlite/)
- [WatermelonDB](https://nozbe.github.io/WatermelonDB/)
- [Realm](https://realm.io/docs/javascript/latest/)
- [Manejo de archivos con React Native](https://reactnative.dev/docs/file-system)

#### 2. Durante la clase
Desarrolla una app que:

- Capture información de una encuesta en una pantalla.
- Guarde los datos localmente usando MMKV, AsyncStorage o archivos de texto.
- Incluya una segunda pantalla para consultar los datos guardados (puede ser a través de promedios, filtros, gráficos, etc.).

### Evaluación
Desarrolla una aplicación que permita al usuario:

- Seleccionar el color de fondo de la pantalla con 3 Sliders, cada uno representando los colores rojo, verde y azul.
- Al salir de la aplicación, los valores seleccionados deben guardarse localmente.
- Al volver a abrir la app, se debe leer y configurar el color de fondo y los sliders con los valores guardados.

Entrega el archivo `.zip` del proyecto (excluyendo `node_modules`) o proporciona el enlace al repositorio.

### Recursos
- [React Native Cheat Sheet](https://github.com/vhpoet/react-native-cheat-sheet)
- [Fundamentos básicos de React](https://reactjs.org/docs/getting-started.html)
- [Componentes básicos de React Native](https://reactnative.dev/docs/components-and-apis)
- [Navegación entre pantallas en React Native](https://reactnavigation.org/docs/getting-started/)
- [Slider en React Native](https://reactnative.dev/docs/slider)


### pasos para correr

- npm install
- npx expo start
- npx react-native run-android
- # o
- npx react-native run-ios

