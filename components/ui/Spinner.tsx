import { StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import React from 'react'
import { Colors } from '../../constants/styles'

const Spinner = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color={Colors.primary800} />
  </View>
  )
}

export default Spinner

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });