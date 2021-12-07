import React from 'react';
// import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Switch, Redirect } from 'react-router-native';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import CreateReview from './CreateReview';

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#e1e4e8',
    display:'flex',
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <Switch>
      <Route path="/SignIn" exact>
         <SignIn></SignIn>
        </Route>
        <Route path='/createReview'>
         <CreateReview></CreateReview>
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path='/:id'>
          <SingleRepository/>
          </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;