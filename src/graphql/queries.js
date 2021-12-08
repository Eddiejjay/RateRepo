import { gql } from '@apollo/client';



export const GET_REPOSITORY = gql`
query Repository($id: ID!){
  repository(id: $id) {
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    id
    ownerAvatarUrl
    url
  
  }
  }`;

export const GET_REVIEWS = gql `
query Repository($id: ID!) {
  repository(id: $id) {
    id
    fullName
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}

`;

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