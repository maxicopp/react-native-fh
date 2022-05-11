/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigator/ProductsNavigator';
import { useCategories } from '../hooks/useCategories';

interface Props
  extends StackScreenProps<ProductsStackParams, 'ProductScreen'> {}

export const ProductScreen = ({ route, navigation }: Props) => {
  const { id, name = '' } = route.params;
  const { categories } = useCategories();
  const [selectedLanguage, setSelectedLanguage] = useState();
  useEffect(() => {
    navigation.setOptions({
      title: name ? name : 'Nuevo producto',
    });
  }, [name, navigation]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Nombre del producto:</Text>
        {/* TODO: add value and onChangeText to TextInput */}
        <TextInput placeholder="Producto" style={styles.textInput} />
        {/* Picker / Selector */}
        <Text style={styles.label}>Categoría:</Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          {categories.map(c => (
            <Picker.Item label={c.nombre} value={c._id} key={c._id} />
          ))}
        </Picker>
        {/* TODO: Por hacer */}
        <Button title="Guardar" onPress={() => {}} color="#5856D6" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Button title="Cámara" onPress={() => {}} color="#5856D6" />
          <View style={{ width: 10 }} />
          <Button title="Galería" onPress={() => {}} color="#5856D6" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 18,
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 45,
    marginTop: 5,
    marginBottom: 15,
  },
});
