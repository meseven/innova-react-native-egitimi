import React from 'react';
import {View, Text, Button} from 'react-native';

const Paragraph = ({count, increment}) => {
  console.log("Paragraph component'i render edildi");

  return (
    <View>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto,
        veritatis sapiente veniam in minima rerum dolor qui magni eius? Rem,
        iste vero fuga repellendus adipisci pariatur quia sint quis accusantium!
      </Text>
      <Text>{count}</Text>
      <Button title="increment" onPress={() => increment(1)} />
      <Button title="increment + 5" onPress={() => increment(5)} />
      <Button title="increment + 10" onPress={() => increment(10)} />
      <Button title="increment + 20" onPress={() => increment(20)} />
    </View>
  );
};

export default React.memo(Paragraph);
