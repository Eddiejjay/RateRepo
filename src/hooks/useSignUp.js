import { CREATE_USER } from "../graphql/mutations";
import { useMutation } from '@apollo/client';
import { useApolloClient } from '@apollo/client';


const useSignUp = () => {
    const [mutate, result] = useMutation(CREATE_USER);
    const apolloClient = useApolloClient();
    
    
    const signUp= async ({username, password }) => {
         const result = await mutate({ variables: { user: { username, password} } });
         apolloClient.resetStore();
   
         return result;
    };
  
    return [signUp, result];
  };

  export default useSignUp;
  
  



