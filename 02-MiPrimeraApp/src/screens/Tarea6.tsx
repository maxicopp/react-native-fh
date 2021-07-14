import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Tarea6 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
  },
  cajaMorada: {
    flex: 1,
    width: '100%',
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
    alignSelf: 'flex-end',
  },
  cajaNaranja: {
    flex: 1,
    width: '100%',
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    alignSelf: 'center',
  },
  cajaAzul: {
    flex: 2,
    width: '100%',
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
    alignSelf: 'flex-start',
  },
});
