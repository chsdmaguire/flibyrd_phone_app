import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, {useEffect} from 'react'
import { auth } from '../../config';
import { getDatabase, ref, set, onValue } from "firebase/database";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {globalStyles} from '../../styles/global';

export const FirstName = ({navigation}) => {
  const [value, onChangeValue] = React.useState('');

  const user = auth.currentUser.uid

  function writeUserData(val) {
    const db = getDatabase();
    set(ref(db, 'users/' + user), {
      first_name: val,
    });
  }

  // const storeData = async (value) => {
  //   try {
  //     await AsyncStorage.setItem('first_name', value)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  const getName = () => {
    const db = getDatabase();
    const res = ref(db, 'users/' + user);
    onValue(res, (snapshot) => {
      const data = snapshot.val().first_name;
      if(data && data.length > 0 && data !== '') {
        onChangeValue(data)
      } else {
      }
    })
  }
  const moveUp = () => {
    if(value !== '') {
      navigation.navigate('LastName')
    } else {
      alert('Please enter your first name before continuing')
    }
}

  useEffect(() => {
    getName();
  }, [])
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>What is your first name?</Text>
      <TextInput style={globalStyles.textInput} 
          autoFocus={true}
          multiLine={false}
          onChangeText={text => onChangeValue(text)}
          value={value}
          ></TextInput>
          <Pressable
          style={globalStyles.continueButton}
          onPress={() => {
            writeUserData(value) 
            moveUp()
            }}>
            <Text style={globalStyles.ctnueBtnText}>Continue</Text>
        </Pressable>
        
    </View>
  )
}