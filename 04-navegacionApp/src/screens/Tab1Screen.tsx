import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
  const { top: marginTop } = useSafeAreaInsets();
  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);
  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop,
      }}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="attach-outline" />
        <TouchableIcon iconName="bonfire-outline" />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="camera-outline" />
        <TouchableIcon iconName="leaf-outline" />
      </Text>
    </View>
  );
};
