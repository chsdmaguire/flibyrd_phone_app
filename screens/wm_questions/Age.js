import {Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import { auth } from '../../config';
import { getDatabase, ref, set, onValue } from "firebase/database";
import {globalStyles} from '../../styles/global';
import { Close } from '../../components';
import Slider from '@react-native-community/slider';

export const age = ({navigation}) => {
  const [value, onChangeValue] = React.useState('');

  const user = auth.currentUser.uid

  function writeUserData(val) {
    const db = getDatabase();
    set(ref(db, 'users/' + user), {
      age: val,
    });
  }

  const getDBValue = () => {
    const db = getDatabase();
    const res = ref(db, 'users/' + user);
    onValue(res, (snapshot) => {
      const data = snapshot.val().age;
      if(data && data.length > 0 && data !== '') {
        onChangeValue(data)
      } else {
      }
    })
  }

  useEffect(() => {
    getDBValue();
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
   <Text style={globalStyles.titleText}>
          What is current age?</Text>
          <Slider
          style={{width: 250, height: 40}}
          step={1}
          minimumValue={18}
          maximumValue={99}
          value={value}
          onValueChange={slideValue => onChangeValue(slideValue)}
          minimumTrackTintColor="#1fb28a"
          maximumTrackTintColor="#505ed9"
          thumbTintColor="#8cedb0"
        />
        <Text>
          I am {value} years old
        </Text>
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
