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
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
    },
    headerIcon: {
      fontSize: 80, 
      color: 'white',
      fontWeight: 'bold'
    },
    headerText: {
      color: 'white', 
      letterSpacing: 2, 
      fontWeight: 'bold', 
      fontSize: 20
    }
})