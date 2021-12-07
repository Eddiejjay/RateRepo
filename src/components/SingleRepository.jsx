import React from 'react';
import { useParams } from 'react-router';
import RepositoryItem from './RepositoryItem';
import useSingleRepository from '../hooks/useSingleRepository';

const SingleRepository = () => {
    const params = useParams();
    const { repository } = useSingleRepository(params.id);

    console.log('parasm', params.id);
    console.log('repository');
    if (!repository)
    return null;
    else 
    return (
     <RepositoryItem item = {repository}/>
    
    );
    
};
export default SingleRepository;
