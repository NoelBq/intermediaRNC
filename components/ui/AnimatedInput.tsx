import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Fumi } from "react-native-textinput-effects";

const AnimatedInput = () => {
  return (
    <Fumi
    label={"Course Name"}
    iconClass={FontAwesomeIcon}
    iconName={"university"}
    iconColor={"#f95a25"}
    iconSize={20}
    inputPadding={16}
  />
  )
}

export default AnimatedInput

const styles = StyleSheet.create({})

 
