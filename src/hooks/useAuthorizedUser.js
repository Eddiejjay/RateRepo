import { useQuery } from "@apollo/client";
import { GET_AUTHORIZEDUSER} from "../graphql/queries";

const useAuthorizedUser = () => {
  const { data, error, loading, refetch } = useQuery(GET_AUTHORIZEDUSER, {
    fetchPolicy: "cache-and-network",
  });

  return { authorizedUser: data?.authorizedUser, loading, refetch };
};

export default useAuthorizedUser;