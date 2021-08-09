import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';

// import MyButton from './components/Button';

const App = () => {
  const [name, setName] = useState('Mehmet');
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({name: 'Burak', age: 28});
  const [users, setUsers] = useState(['Ahmet', 'Mehmet', 'Filiz']);
  const [text, setText] = useState('');

  const setCountData = type => {
    if (type === '-') {
      setCount(c => c - 1);
      return false;
    }

    setCount(c => c + 1);
  };

  const setUserData = () => {
    setUser({...user, name: 'Fatma'});
  };

  const addUser = () => {
    if (!text) {
      return false;
    }

    setUsers([...users, text]);
    setText('');
  };

  return (
    <SafeAreaView>
      <View>
        <Text>{name}</Text>
        <Button title="Click" onPress={() => setName('Ahmet')} />

        <Text>{count}</Text>
        <Button title="Azalt" onPress={() => setCountData('-')} />
        <Button title="Arttır" onPress={() => setCountData('+')} />

        <Text>User</Text>
        <Text>Name: {user.name}</Text>
        <Text>Age: {user.age}</Text>
        <Button title="Change" onPress={setUserData} />

        {users.map((item, index) => (
          <Text key={index}>
            {index + 1} - {item}
          </Text>
        ))}
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          // caretHidden={true}
          autoCorrect={false}
          // autoCapitalize="none"
          // secureTextEntry
          // multiline
          // numberOfLines={2}
          // onEndEditing={() => alert('test')}
        />
        <Button title="New User" onPress={addUser} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
