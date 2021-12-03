import React from 'react';
import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
// ...

const RepositoryList = () => {
  const { repositories } = useRepositories();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];


  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={repositoryNodes}
      renderItem={({ item }) => ( 
        <RepositoryItem item = {item}/>
      )}
      // Other props
    />
  );
};

export default RepositoryList;