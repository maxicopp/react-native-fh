/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export const Map = () => {
  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => console.log(info),
      err => console.log({ err }),
      {
        enableHighAccuracy: true,
      },
    );
  }, []);
  return (
    <>
      <MapView
        style={{ flex: 1 }}
        showsUserLocation
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
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
    </>
  );
};
