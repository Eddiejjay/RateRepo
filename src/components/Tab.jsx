import React from 'react';
import { Link } from 'react-router-native';
import Text from './Text';

const Tab = ({ text, link }) => {
    return  (
     <Link to ={link}><Text>{text}</Text></Link>
    );
};

export default Tab;
