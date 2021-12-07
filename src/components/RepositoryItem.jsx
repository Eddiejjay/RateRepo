import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import Text from './Text';
import Stats from './Stats';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';
import * as Linking from 'expo-linking';

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
    const params = useParams();
    const history = useHistory();

    const onPress = () => {
        console.log('jeee');
        history.push(`/${item.id}`);
        
          };

    const onLinkPress = () => {

            Linking.openURL(item.url);
        };

    return (
      
        <View style = {styles.container}> 
          <Pressable onPress={onPress}>
            <View style = {imageAndInfoContainer.container}>     
                    <Image
                        style={{justifyContent:'flex-start',width:'15%', height: '90%', borderRadius:15,marginRight:10 }}
                        source={{uri:item.ownerAvatarUrl}} resizeMode="contain"
                    />
                <View style ={basicInfo.container}>
                    <Text testID ='fullName' style = {{padding:2}}color = 'primary' fontWeight='bold'> {item.fullName}</Text>
                    <Text testID ='description'  style = {{padding:2}} color = 'textSecondary'> {item.description}</Text>
                    <Text testID ='language'  style = {{marginTop:5, marginLeft:5,alignSelf:'flex-start',color:'white', borderRadius: 5, padding:5, backgroundColor:'#0366d6'}} color = 'textSecondary'> {item.language}</Text>
                </View>
    
            </View>
            </Pressable>

        <Stats testID='stats'item =  {item}/>
        {!!params.id && <Pressable onPress={onLinkPress}><Text>Open on GitHub</Text></Pressable>}
        </View>
      
    );
};

export default RepositoryItem;
