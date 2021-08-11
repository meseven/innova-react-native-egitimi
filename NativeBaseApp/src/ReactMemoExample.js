import React, {useState, useMemo, useCallback} from 'react';
import {Text, SafeAreaView, Button} from 'react-native';
import Paragraph from './Paragraph';
import Users from './Users';

const ReactMemoExample = () => {
  const [count, setCount] = useState(0);

  console.log("ReactMemoExample component'i render edildi");

  const users = useMemo(() => {
    return ['Ahmet', 'Mehmet', 'Ayşe', count];
  }, [count]);

  const increment = useCallback(i => {
    setCount(c => c + i);
  }, []);

  return (
    <SafeAreaView>
      <Text>ReactMemoExample</Text>
      <Text>{count}</Text>
      <Button title="increment" onPress={() => setCount(count + 1)} />

      <Paragraph count={count > 5 ? count : 0} increment={increment} />
      <Users users={users} />
    </SafeAreaView>
  );
};

export default ReactMemoExample;
