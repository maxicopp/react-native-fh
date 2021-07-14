import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Tarea5 = () => {
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
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cajaMorada: {
    height: '100%',
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
    alignSelf: 'flex-end',
  },
  cajaNaranja: {
    height: '100%',
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    alignSelf: 'center',
  },
  cajaAzul: {
    height: '100%',
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
    alignSelf: 'flex-start',
  },
});
