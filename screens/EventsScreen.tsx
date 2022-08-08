import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { loadEvents } from '../services/eventsServices'
import { AxiosError } from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import DetailCard from '../components/DetailCard'
import { SET_EVENTS } from '../store/redux/events'

const EventsScreen = ({navigation}:any) => {

const dispatch = useDispatch()

  useEffect(() => {
    (async function events() {
      try {
        const response = await loadEvents();
        dispatch(SET_EVENTS(response.data.data.results));
      } catch (error: unknown) {
        if (!(error instanceof AxiosError)) { throw error; }
        console.log(error.message)
      }

    })();
    console.log('COMPONENT MOUNTING')
  }, [])

 
  const events = useSelector((state:any) => state.events)
  console.log(events)


  // function renderCharacter(itemData: { item: { name: string, image: string, id: string } }) {

  //   function pressHandler() {
  //     navigation.navigate('EventDetail')
  //   }
  //   return <DetailCard item={itemData.item} onPress={pressHandler} style={styles.innerWrapper} />
  // }


  return (
    <Text> testing api call </Text>
    // <SafeAreaView style={styles.container}>
    //   <FlatList
    //     data={USERS}
    //     keyExtractor={item => item.email}
    //     renderItem={renderCharacter}
    //   />
    // </SafeAreaView>


  )
}

export default EventsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    width: '100%'
  }, 
  innerWrapper: {
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.25,
    backgroundColor: 'white',
  }
});




