/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';

export const Animation101Screen = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('animación terminó'));
  };
  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.container}>
      <Animated.View
        style={{ ...styles.purpleBox, opacity, marginBottom: 20 }}
      />
      <Button title="fadeIn" onPress={fadeIn} />
      <Button title="fadeOut" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
