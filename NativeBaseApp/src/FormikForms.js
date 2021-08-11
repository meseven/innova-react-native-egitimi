import React from 'react';
import {SafeAreaView, Text, TextInput, StyleSheet} from 'react-native';

import {useFormik} from 'formik';
import {Button} from 'native-base';

const FormikForms = () => {
  const {values, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: (data, bag) => {
      console.log(data);

      bag.resetForm();
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text>{JSON.stringify(values)}</Text>
      <TextInput
        onChangeText={handleChange('email')}
        placeholder="e-mail"
        style={styles.input}
        value={values.email}
        autoCapitalize={'none'}
        keyboardType="email-address"
        autoCorrect={false}
      />

      <TextInput
        onChangeText={handleChange('password')}
        placeholder="password"
        style={styles.input}
        value={values.password}
        secureTextEntry
      />

      <TextInput
        onChangeText={handleChange('passwordConfirm')}
        placeholder="password confirm"
        style={styles.input}
        value={values.passwordConfirm}
        secureTextEntry
      />

      <Button onPress={handleSubmit}>Submit</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  input: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#666',
    fontSize: 20,
    marginVertical: 10,
  },
});

export default FormikForms;
