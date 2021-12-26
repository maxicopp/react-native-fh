import React from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({ route }: Props) => {
  const { simplePokemon, color } = route.params;
  return (
    <View>
      <Text style={{ color }}>
        {simplePokemon.id} - {simplePokemon.name} - {color}
      </Text>
    </View>
  );
};
