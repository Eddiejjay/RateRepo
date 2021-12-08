import React from 'react';
import { View, Pressable } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import Text from './Text';
import useSignUp from '../hooks/useSignUp';



const validationSchema = yup.object().shape({
    username: yup
      .string().min(0).max(30)
      .required('Username is required'),
    password: yup
      .string().min(5).max(50)
      .required('Password is required'),
      passwordConfirmation: yup
      .string().min(5).max(50).oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Password is required'),

  });
  


export const ReviewForm = ({ onSubmit }) => {
    return (
      <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password"  secureTextEntry={true} />
      <FormikTextInput name="passwordConfirmation" placeholder="Password confirmation"  secureTextEntry={true}/>
 

      <Pressable onPress={onSubmit}>
        <Text>Sign up</Text>
      </Pressable>
    </View>
    );
  
  };

  const initialValues = {
    username: '',
    password: '',
    passwordConfirmation:'',

  };


  const SignUp = () => {
  
    const [signUp] = useSignUp();

      const onSubmit = async (values) => {
        const {username, password } = values;
    
        console.log('values', username, password);
        try {
          const { result }  = await signUp({ username, password});
          console.log('data', result);
        } catch (e) {
          console.log(e);
        }
      };

return (

    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>


);
};

export default SignUp;
