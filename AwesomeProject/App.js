import React from 'react';
import {SafeAreaView, Text, View, Button, TouchableOpacity} from 'react-native';

import MyButton from './components/Button';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        {/* <Button title="Click" /> */}
        <MyButton onPress={() => alert('asd')} />
      </View>
    </SafeAreaView>
  );
};

export default App;
