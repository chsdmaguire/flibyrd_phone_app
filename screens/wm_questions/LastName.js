import {Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import { auth } from '../../config';
import { getDatabase, ref, set, onValue } from "firebase/database";
import {globalStyles} from '../../styles/global';
import { Close } from '../../components';

export const LastName = ({navigation}) => {
  const [value, onChangeValue] = React.useState('');

  const user = auth.currentUser.uid

  function writeUserData(val) {
    const db = getDatabase();
    set(ref(db, 'users/' + user), {
      last_name: val,
    });
  }

  const getName = () => {
    const db = getDatabase();
    const res = ref(db, 'users/' + user);
    onValue(res, (snapshot) => {
      const data = snapshot.val().last_name;
      if(data && data.length > 0 && data !== '') {
        onChangeValue(data)
      } else {
      }
    })
  }

  useEffect(() => {
    getName();
  }, [])

  const moveUp = () => {
    if(value !== '') {
      navigation.navigate('LastName')
    } else {
      alert('Please enter your last name before continuing')
    }
}
  const moveBack = () => {
    navigation.goBack()
  }

  return (
    <View style={globalStyles.container}>
   <Close onPress={() => navigation.navigate('QuestionList')} />
      <Text style={globalStyles.titleText}>What is your last name?</Text>
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
          } }>
            <Text style={globalStyles.ctnueBtnText}>Continue</Text>
        </Pressable>
        <Pressable
          style={globalStyles.backBtn}
          onPress={moveBack} >
            <Text style={globalStyles.backBtnText}>Back</Text>
        </Pressable>
    </View>
  )
}
