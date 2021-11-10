import React from 'react';
import { View, Pressable } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';

import Text from './Text';



const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username lenghth minimun is 3 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password lenghth minimun is 5 characters')
    .required('Password is required'),
});


export const SignInForm = ({ onSubmit }) => {
  return (
    <View>
    <FormikTextInput name="username" placeholder="Type username" />
    <FormikTextInput name="password" placeholder="Type password" secureTextEntry={true}/>
    <Pressable onPress={onSubmit}>
      <Text>Submit</Text>
    </Pressable>
  </View>
  );

};


const SignIn = () => {

  const initialValues = {
    username: '',
    password: '',
  };


  

  const onSubmit = (values) => {
    console.log(values);
  };
  
  return (

      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>

  
  );
};




export default SignIn;