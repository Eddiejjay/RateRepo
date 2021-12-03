import React from 'react';
import { View, StyleSheet, ScrollView, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import Tab from './Tab';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
// import Text from './Text';
// import { Link } from 'react-router-native';
const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "black",
    opacity:0.6,
    height: 90
    // ...
  },
  // ...
});


const AppBar = () => {
  const authStorage = useAuthStorage();
  const { authorizedUser } = useAuthorizedUser();
  const apolloClient = useApolloClient();


  const signOut = async  () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  


};


  return (
  
  <View style={styles.container}>
     <ScrollView horizontal>
    <Tab text = 'Repositories' link ='/'></Tab>
    {!authorizedUser && <Tab text = 'Sign in' link ='/SignIn'></Tab>}
    {authorizedUser&&  <Pressable onPress={signOut}><Text style={styles.text}>Sign out</Text></Pressable>}
    </ScrollView>
    </View>
  

  );
};

export default AppBar;