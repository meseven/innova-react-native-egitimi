import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import {useFormik} from 'formik';
import {FormControl, Input, Stack, Button} from 'native-base';

import validations from './validations';

const FormikForms = () => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: (data, bag) => {
      console.log(data);

      bag.resetForm();
    },
    validationSchema: validations,
    validateOnMount: true,
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <FormControl isInvalid={errors.email && touched.email} mt={5}>
        <Stack>
          <FormControl.Label>E-mail</FormControl.Label>
          <Input
            p={2}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            autoCapitalize={'none'}
            keyboardType="email-address"
            autoCorrect={false}
          />

          {errors.email && touched.email && (
            <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
          )}
        </Stack>
      </FormControl>

      <FormControl isInvalid={errors.password && touched.password} mt={5}>
        <Stack>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            p={2}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
          />

          {errors.password && touched.password && (
            <FormControl.ErrorMessage>
              {errors.password}
            </FormControl.ErrorMessage>
          )}
        </Stack>
      </FormControl>

      <FormControl
        isInvalid={errors.passwordConfirm && touched.passwordConfirm}
        mt={5}>
        <Stack>
          <FormControl.Label>Password Confirm</FormControl.Label>
          <Input
            p={2}
            onChangeText={handleChange('passwordConfirm')}
            onBlur={handleBlur('passwordConfirm')}
            value={values.passwordConfirm}
            secureTextEntry
          />

          {errors.passwordConfirm && touched.passwordConfirm && (
            <FormControl.ErrorMessage>
              {errors.passwordConfirm}
            </FormControl.ErrorMessage>
          )}
        </Stack>
      </FormControl>

      <Button onPress={handleSubmit} disabled={!isValid} mt={5}>
        Submit
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  title: {
    fontSize: 32,
  },
});

export default FormikForms;
