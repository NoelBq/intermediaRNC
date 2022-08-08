import { StyleSheet, Text, View, Pressable, Button} from 'react-native'
import React from 'react'
import DetailCard from '../components/DetailCard'
import Subtitle from '../components/ui/Subtitle'

const EventDetailScreen = ({navigation}) => {

  function goBackHandler() {
    navigation.goBack()
  }

  return (
     <Pressable style={styles.container} onPress={goBackHandler}>
      <DetailCard  style={styles.innerWrapper} onPress={()=>{}} item={{ name: 'hello', image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}}/>
      <Subtitle>Comics to discuss</Subtitle>
      
    </Pressable>
    

  )
}

export default EventDetailScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1
    },
    innerWrapper: {
        backgroundColor: 'white'
    }
})