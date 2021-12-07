import React from 'react';
import { View, Pressable } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import Text from './Text';
import useNewReview from '../hooks/useNewReview';
// import useSignIn from '../hooks/useSignIn';
// import { useHistory } from 'react-router-native';


const validationSchema = yup.object().shape({
    ownerName: yup
      .string()
      .required('Owners username is required'),
    repositoryName: yup
      .string()
      .required('Name of repository is required'),
    rating: yup
      .number().min(0).max(100)
      .required('Rating is required'),
      text: yup
      .string()
  });
  


export const ReviewForm = ({ onSubmit }) => {
    return (
      <View>
      <FormikTextInput name="ownerName" placeholder="Repository owner name " />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="text" placeholder="Review" />

      <Pressable onPress={onSubmit}>
        <Text>Create a review</Text>
      </Pressable>
    </View>
    );
  
  };

  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating:'',
    text:''

  };


  const CreateReview = () => {
    // const history = useHistory();
    // const [signIn] = useSignIn();
    
  
    const [newReview] = useNewReview();



    
      const onSubmit = async (values) => {
        const {repositoryName, ownerName, rating, text} = values;
    
        console.log('values', repositoryName, ownerName, rating, text);
        try {
          const { result }  = await newReview({ repositoryName, ownerName, rating, text });
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

export default CreateReview;
