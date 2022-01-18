/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from 'react';
import MapView from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../pages/LoadingScreen';
import { Fab } from './Fab';

export const Map = () => {
  const { hasLocation, initialPosition, getCurrentLocation } = useLocation();
  const mapViewRef = useRef<MapView>();
  const centerPosition = async () => {
    const location = await getCurrentLocation();
    mapViewRef.current?.animateCamera({
      center: location,
    });
  };
  if (!hasLocation) {
    return <LoadingScreen />;
  }
  return (
    <>
      <MapView
        ref={el => (mapViewRef.current = el!)}
        style={{ flex: 1 }}
        showsUserLocation
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* <Marker
          image={require('../assets/custom-marker.png')}
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Esto es un título"
          description="Esto es una descripción del marcador"
        /> */}
      </MapView>
      <Fab
        iconName="compass-outline"
        onPress={centerPosition}
        style={{ position: 'absolute', bottom: 20, right: 20 }}
      />
    </>
  );
};
