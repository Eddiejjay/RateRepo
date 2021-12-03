import React from 'react';
import { View, Pressable } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import Text from './Text';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';



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
  const initialValues = {
    username: '',
    password: '',
  };

  const SignIn = () => {
      const history = useHistory();
      const [signIn] = useSignIn();
    
      const onSubmit = async (values) => {
        const { username, password } = values;
    
        console.log('username, password', username,password);
        try {
          const { data }  = await signIn({ username, password });
          console.log('pass', username,password);
          console.log("data",data);
          history.push('/');
        } catch (e) {
          console.log(e);
        }
      };
  

  
  return (

      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>

  
  );
};




export default SignIn;