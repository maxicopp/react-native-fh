import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// import { Contador } from './src/screens/Contador';
// import { HolaMundo } from './src/screens/HolaMundo';
// import { BoxObjectModel } from './src/screens/BoxObjectModel';
// import { Dimensiones } from './src/screens/Dimensiones';
// import { Position } from './src/screens/Position';
// import { Flex } from './src/screens/Flex';
// import { Tarea1 } from './src/screens/Tarea1';
// import { Tarea2 } from './src/screens/Tarea2';
// import { Tarea3 } from './src/screens/Tarea3';
// import { Tarea4 } from './src/screens/Tarea4';
// import { Tarea5 } from './src/screens/Tarea5';
// import { Tarea6 } from './src/screens/Tarea6';
// import { Tarea7 } from './src/screens/Tarea7';
// import { Tarea8 } from './src/screens/Tarea8';
import { Tarea9 } from './src/screens/Tarea9';

export const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* return <HolaMundo />; */}
      {/* return <Contador />; */}
      {/* <BoxObjectModel /> */}
      {/* <Dimensiones /> */}
      {/* <Position /> */}
      {/* <Flex /> */}
      {/* <Tarea1 /> */}
      {/* <Tarea2 /> */}
      {/* <Tarea3 /> */}
      {/* <Tarea4 /> */}
      {/* <Tarea5 /> */}
      {/* <Tarea6 /> */}
      {/* <Tarea7 /> */}
      {/* <Tarea8 /> */}
      <Tarea9 />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#28425B',
  },
});
