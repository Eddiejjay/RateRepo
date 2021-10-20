import React from 'react';
import { View } from 'react-native';
import Text from './Text';

const RepositoryItem = ({ item }) => {
    return (
        <View>
            <Text color = 'primary' fontWeight='bold'>Full name: {item.fullName}</Text>
            <Text color = 'textSecondary'>Description: {item.description}</Text>
            <Text color = 'textSecondary'>Language: {item.language}</Text>
            <Text color = 'textSecondary'>Stars: {item.stargazersCount}</Text>
            <Text color = 'textSecondary'>Forks: {item.forksCount}</Text>
            <Text color = 'textSecondary'>Reviews: {item.reviewCount}</Text>
            <Text color = 'textSecondary'>Rating: {item.ratingAverage}</Text>
        </View>
    );
};

export default RepositoryItem;
