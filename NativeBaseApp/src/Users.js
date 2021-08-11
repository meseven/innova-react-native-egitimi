import React from 'react';
import {View, Text} from 'react-native';

const Users = ({users}) => {
  console.log("Users component'i render edildi.");
  return (
    <View style={{marginTop: 20}}>
      <Text>Users</Text>
      {users.map((user, index) => (
        <Text key={index}>{user}</Text>
      ))}
    </View>
  );
};

export default React.memo(Users);
