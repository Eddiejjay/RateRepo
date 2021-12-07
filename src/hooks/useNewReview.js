import { CREATE_REVIEW } from "../graphql/mutations";
import { useMutation } from '@apollo/client';
import { useApolloClient } from '@apollo/client';


const useNewReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);
    const apolloClient = useApolloClient();
    
    
    const newReview = async ({repositoryName, ownerName, rating, text  }) => {
         const result = await mutate({ variables: { review: { repositoryName, ownerName, rating, text } } });
         apolloClient.resetStore();
         console.log('resul', result);
   
         return result;
    };
  
    return [newReview, result];
  };

  export default useNewReview;
  
  



