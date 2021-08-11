import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';

import CameraRoll from '@react-native-community/cameraroll';
import {RNCamera} from 'react-native-camera';

let camera;
const App = () => {
  const [photos, setPhotos] = useState([]);

  const takePicture = async () => {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.takePictureAsync(options);
      await CameraRoll.save(data.uri);

      setPhotos([data.uri, ...photos]);

      console.log('Fotoğraf kaydedildi.');
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        ref={ref => {
          camera = ref;
        }}>
        <View style={styles.controls}>
          <ScrollView
            style={styles.photoList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {photos.length > 0 &&
              photos.map((photo, index) => (
                <Image key={index} style={styles.img} source={{uri: photo}} />
              ))}
          </ScrollView>

          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => takePicture()}>
              <Text style={styles.buttonText}>Capture ({photos.length})</Text>
            </TouchableOpacity>
          </View>
        </View>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 50,
  },
  buttonText: {
    textAlign: 'center',
  },
  controls: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photoList: {
    flexDirection: 'row',
    flex: 0.5,
    marginRight: 5,
  },
  buttons: {
    flex: 0.5,
  },
  img: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#fff',
    marginRight: 2,
  },
});

export default App;
