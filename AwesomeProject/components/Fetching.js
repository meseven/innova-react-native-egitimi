import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

import axios from 'axios';

const Fetching = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(data => data.json())
    //   .then(res => setUsers(res));
    //
    // axios('https://jsonplaceholder.typicode.com/users')
    //   .then(res => res.data)
    //   .then(data => {
    //     console.log('Users', data);
    //     const userId = data[0].id;
    //     axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    //       .then(res => res.data)
    //       .then(postData => {
    //         console.log('Posts', postData);
    //       });
    //   });
    //

    async function getData() {
      try {
        const {data} = await axios(
          'https://jsonplaceholder.typicode.com/users',
        );

        const {data: postData} = await axios(
          `https://jsonplaceholder.typicode.com/posts?userId=${data[0].id}`,
        );
        console.log('Posts yüklendi.', postData);
      } catch (e) {
        console.log(e);
      }
    }

    getData();
  }, []);

  return (
    <SafeAreaView>
      <Text>{users.length}</Text>

      {users.map(item => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </SafeAreaView>
  );
};

export default Fetching;
