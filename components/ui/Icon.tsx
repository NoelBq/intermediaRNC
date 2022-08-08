import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, {useEffect} from 'react';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    icon : string | any;
    color: string,
    size: number,
    style: object,
    onPress: () => void
  };
  


const Icon: React.FC<Props> = ({icon, color, onPress, size, style}) => {

  return (
    <Pressable onPress={onPress}>
       <Ionicons onPress={onPress} name={icon} size={size} color={color} style={style}/>
    </Pressable>
  )
}

export default Icon

const styles = StyleSheet.create({})