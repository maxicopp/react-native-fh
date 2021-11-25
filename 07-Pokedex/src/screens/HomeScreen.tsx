import React from 'react';
import { Button, Text, View } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to PokemonScreen"
        onPress={() => navigation.navigate('PokemonScreen')}
      />
    </View>
  );
};
