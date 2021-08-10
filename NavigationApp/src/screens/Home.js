import React, {useState, useLayoutEffect} from 'react';
import {View, Text, Button} from 'react-native';

import LottieView from 'lottie-react-native';

let timerCount = 5;
function Home({navigation}) {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          color="#fff"
          onPress={() => setCount(c => c + 1)}
          title="Count+"
        />
      ),
    });
  }, [navigation]);

  const timer = () => {
    const interval = setInterval(() => {
      timerCount -= 1;

      if (timerCount < 1) {
        navigation.setOptions({title: 'Süre doldu!'});
        clearInterval(interval);
        return false;
      }

      navigation.setOptions({title: String(timerCount)});
    }, 1000);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{width: 300, height: 300}}>
        <LottieView
          source={require('../assets/animations/fox-animation.json')}
          autoPlay
          loop
        />
      </View>

      <View>
        <Text>Home Screen {count}</Text>
        <Button
          title="Post 1"
          onPress={() =>
            navigation.push('Details', {postId: 1, title: 'Post 1'})
          }
        />
        <Button
          title="Post 2"
          onPress={() =>
            navigation.push('Details', {postId: 2, title: 'Post 2'})
          }
        />
        <Button
          title="Post 3"
          onPress={() =>
            navigation.push('Details', {postId: 3, title: 'Post 3'})
          }
        />

        <Button title="Start title timer" onPress={timer} />
      </View>
    </View>
  );
}

export default Home;
