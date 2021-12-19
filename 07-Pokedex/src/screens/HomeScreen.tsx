/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, FlatList, Image, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../components/PokemonCard';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();
  const { top } = useSafeAreaInsets();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        // Header
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              ...styles.globalMargin,
              marginTop: top + 20,
            }}>
            Pokedex
          </Text>
        }
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        // Infinite scroll
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator style={{ height: 100 }} size={20} color="grey" />
        }
      />
      {/* <Text style={{ ...styles.title, ...styles.globalMargin, top: top + 20 }}>
        Pokedex
      </Text> */}
    </>
  );
};
