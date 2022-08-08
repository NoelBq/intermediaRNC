import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderIcon = () => {
  return (
    <View style={styles.iconContainer}>
      <Text style={styles.headerIcon}>M</Text>
      <Text style={styles.headerText}>Marvell Challenge</Text>
    </View>
  )
}

export default HeaderIcon

const styles = StyleSheet.create({
    iconContainer: {},
    headerIcon: {
      fontSize: 30, 
      color: 'white'
    },
    headerText: {}
})