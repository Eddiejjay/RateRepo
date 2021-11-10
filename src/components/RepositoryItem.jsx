import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';
import Stats from './Stats';



const styles = StyleSheet.create({
    container: {
        display:'flex',
      backgroundColor:'#ffffff',

    },
  });
  
  const imageAndInfoContainer = StyleSheet.create({
    container: {
        flexDirection:'row',
        padding:10,
        justifyContent:'flex-start',
        margin:5
    },
  });
  
  const basicInfo= StyleSheet.create({
    container: {
        flexDirection:'column',
        justifyContent: 'space-between'


    },
  });

const RepositoryItem = ({ item }) => {

    return (
        <View style = {styles.container}> 
            <View style = {imageAndInfoContainer.container}>     
                    <Image
                        style={{justifyContent:'flex-start',width:'15%', height: '90%', borderRadius:15,marginRight:10 }}
                        source={{uri:item.ownerAvatarUrl}} resizeMode="contain"
                    />
                <View style ={basicInfo.container}>
                    <Text style = {{padding:2}}color = 'primary' fontWeight='bold'> {item.fullName}</Text>
                    <Text style = {{padding:2}} color = 'textSecondary'> {item.description}</Text>
                    <Text style = {{marginTop:5, marginLeft:5,alignSelf:'flex-start',color:'white', borderRadius: 5, padding:5, backgroundColor:'#0366d6'}} color = 'textSecondary'> {item.language}</Text>
                </View>
            </View>

        <Stats item =  {item}/>

        </View>
    );
};

export default RepositoryItem;
