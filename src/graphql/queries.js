import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
            edges{
              node {
                    fullName
                description
                language
                stargazersCount
                forksCount
                reviewCount
                ratingAverage
                id
                ownerAvatarUrl
              
              }
            
          }
    }
  }
`;

export const GET_AUTHORIZEDUSER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;