import React from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import Tab from './Tab';
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
  return (
  
  <View style={styles.container}>
     <ScrollView horizontal>
    <Tab text = 'Repositories' link ='/'></Tab>
    <Tab text = 'Sign in' link ='/SignIn'></Tab>
    
    </ScrollView>
    </View>
  

  );
};

export default AppBar;