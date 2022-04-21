import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { signOut } from 'firebase/auth';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../config';

export const HomeScreen = ({navigation}) => {
  const firebaseAuth = getAuth();

  const showId = () => {
    const user = firebaseAuth.currentUser;
    console.log(user.uid)
  }

  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };
  return (
    <View style={styles.container}>
      <Button title='Sign Out' onPress={handleLogout} />
      <Button 
      title="welcome!"  
      onPress={() => navigation.replace('FirstName')} />
      <Button onPress={showId} title="show user id" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
