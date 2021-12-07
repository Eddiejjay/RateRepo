import React from 'react';
import { useParams } from 'react-router';
import RepositoryItem from './RepositoryItem';
import useSingleRepository from '../hooks/useSingleRepository';
import useReviews from '../hooks/useReviews';
import { FlatList, View, Text } from 'react-native';


const RepositoryInfo = ({ repository }) => {
    return (
        <RepositoryItem item = {repository}/>
    );
  };
  
  const ReviewItem = ({ review }) => {

      return (

    <View>
        <Text>{review.node.user.username}</Text>
        <Text>{review.node.rating}</Text>
        <Text>{review.node.createdAt}</Text>
        <Text>{review.node.text}</Text>
        </View>
      );
  };
  
  const SingleRepository = () => {
    const params = useParams();
    const { repository } = useSingleRepository(params.id);
    const { reviews } = useReviews(params.id);
  
    if (!repository)
    return null;
    else 
    return (
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    
      />
    );
  };
  
  export default SingleRepository;

