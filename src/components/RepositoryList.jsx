import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import {Picker} from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
    keyExtractor={(item) => item.id}
    data={repositoryNodes}
    renderItem={({ item }) => ( 
      <RepositoryItem item = {item}/>
    )}
  />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories({selection, direction});
  const [selection, setSelection] = useState('');
  const [direction, setDirection] = useState('');
  const [keyword, setKeyword] = useState('');
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

console.log('selection', selection);
  return (
< View>
  <Searchbar
      placeholder="Search"
      onChangeText={keyword}
      value={keyword}
    />
    <Picker
     selectedValue={selection}
     onValueChange={(itemValue) =>
       setSelection(itemValue)
     }>
  <Picker.Item label="Latest respositories" value="CREATED AT" />
  <Picker.Item label="Highest rated repositories" value="RATING AVERAGE" />
  <Picker.Item label="Lowest rated repositories" value="RATING AVERAGE" />
</Picker>
    <FlatList
      keyExtractor={(item) => item.id}
      data={repositoryNodes}
      renderItem={({ item }) => ( 
        <RepositoryItem item = {item}/>
      )}

    />
    </View>
  );
};

export default RepositoryList;