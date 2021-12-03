import { AUTHORIZE } from "../graphql/mutations";
import { useMutation } from '@apollo/client';

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHORIZE);
  
    const signIn = async ({ username, password }) => {
         const result = await mutate({ variables: { credentials: { username, password } } });
         return result;
    };
  
    return [signIn, result];
  };

  export default useSignIn;