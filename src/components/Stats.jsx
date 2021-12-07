import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text
 from './Text';


 const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
        justifyContent: 'space-around',
        marginBottom:10
      

    },
  });

  const styles2 = StyleSheet.create({
    container: {
        flexDirection : 'column',

      

    },
  });

  const numberTransformer = (number) => {
    if (number >= 1000) {
        const ksAndDecimal = number/1000;
        const ks = Math.trunc(ksAndDecimal);
        const decimal = Math.round(ksAndDecimal * 10) / 10;
        const decimalString = decimal.toString();
        const finalDecimal = decimalString[decimalString.length-1];
        return ks.toString() + '.' + finalDecimal + 'k';
    }
    else {
    return number;
    }
  };

const Stats = ({item}) => {
    return (
    <View style = {styles.container}>
        <View syle = {styles2.container}>  
            <Text testID ='stargazersCount' style = {{padding:2}} fontWeight = 'bold' color = 'primary'>{numberTransformer(item.stargazersCount)}</Text>
            <Text style = {{padding:2}} color ='textSecondary'>Stars</Text>

        </View>  
        <View syle = {styles2.container}>  
            <Text testID ='forksCount' style = {{padding:2}}fontWeight = 'bold' color = 'primary'> {numberTransformer(item.forksCount)}</Text>
            <Text style = {{padding:2}}color ='textSecondary'>Forks </Text>
      
        </View>  
        <View syle = {styles2.container}>  
            <Text testID ='reviewCount' style = {{padding:2}} fontWeight = 'bold' color = 'primary'>{numberTransformer(item.reviewCount)}</Text>
            <Text style = {{padding:2}}color ='textSecondary'>Reviews</Text> 
        </View>  
        <View syle = {styles2.container}>  
            <Text testID ='ratingAverage' style = {{padding:2}}fontWeight = 'bold' color = 'primary'>{numberTransformer(item.ratingAverage)}</Text>
            <Text style = {{padding:2}}color ='textSecondary'>Rating</Text> 
        </View>  
    </View>
    );
};

export default Stats;
