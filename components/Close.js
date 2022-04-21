import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global';
export const Close = ({onPress}) => {
    return (
    <TouchableOpacity style={globalStyles.closeButton} 
      onPress={onPress}>
          <AntDesign name="closecircle" color="black" size={24} />
      </TouchableOpacity>        
    )

}