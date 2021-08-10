import React from 'react';
import {View, Text, Button} from 'react-native';

function Details({navigation, route}) {
  const params = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>{JSON.stringify(params)}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.push('HomeScreen')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default Details;
