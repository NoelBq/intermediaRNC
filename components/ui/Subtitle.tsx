import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/styles'

type Props = {
    children?: string | JSX.Element | JSX.Element[];
  };

const Subtitle: React.FC<Props> = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
    <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 18, 
        fontWeight: 'bold',
        textAlign: 'center',
        color:  Colors.primary800,
        textTransform: 'uppercase',
        letterSpacing: 3
      }, 
      subtitleContainer: {
        marginTop: 15,
        marginBottom: 4,
        padding: 6,
        paddingVertical: 7,
        width: '80%',
        alignSelf: 'center', 
     }
})