import { AUTHORIZE } from "../graphql/mutations";
import { useMutation } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from "@apollo/client";

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHORIZE);
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const signIn = async ({ username, password }) => {
         const result = await mutate({ variables: { credentials: { username, password } } });
         const token = result.data.authorize.accessToken;
         authStorage.setAccessToken(token);
         apolloClient.resetStore();
  
         return result;
    };
  
    return [signIn, result];
  };

  export default useSignIn;