import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';

const places = [
  {
    title: 'Üsküdar',
    latitude: 41.029066, // 41.029066, 29.031471
    longitude: 29.031471,
  },
  {
    title: 'Kadıköy',
    latitude: 40.990348, // 40.990348, 29.028839
    longitude: 29.028839,
  },
];

const App = () => {
  const [coords, setCoords] = useState({latitude: 0, longitude: 0});

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      const {
        coords: {latitude, longitude},
      } = info;

      setCoords({latitude, longitude});
    });
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.4,
          longitudeDelta: 0.5,
        }}
        showsUserLocation={true}
        userLocationAnnotationTitle="Merhaba, ben burdayım!"
        zoomControlEnabled={true}
        showsTraffic={true}>
        {places.map((place, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
            title={place.title}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
