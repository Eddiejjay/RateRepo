
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const {loading, error, data }= useQuery(GET_REPOSITORIES , {
    fetchPolicy: 'cache-and-network',
    // Other options
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
 
  if(data) {
   return data;
  } 

};
export default useRepositories;