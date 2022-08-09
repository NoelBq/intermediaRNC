import { StyleSheet, SafeAreaView, FlatList, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import { loadEventsByOrder } from '../services/eventsServices'
import { AxiosError } from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import DetailCard from '../components/DetailCard'
import { SET_EVENTS } from '../store/redux/events'
import Spinner from '../components/ui/Spinner'

const LIMIT: number = 15;

const EventsScreen = ({ navigation }: any) => {

  const dispatch = useDispatch()

  const [offset, setOffset] = useState(1);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async function events() {
      try {
        const response = await loadEventsByOrder();
        dispatch(SET_EVENTS(response.data.data.results));
        setLoading(false)
      } catch (error: unknown) {
        if (!(error instanceof AxiosError)) { throw error; }
        console.log(error.message)
      }

    })();
  }, [])


  const events = useSelector((state: any) => state.events)
  console.log(events)

  const fetchData = async () => {
    const response = await loadEventsByOrder(10, offset * LIMIT);
    dispatch(SET_EVENTS(response.data.data.results));
    setOffset(offset + 1);
  }

  function renderCharacter(itemData: { item: { name: string, image: string, id: string, thumbnail: any, title: string, start: any } }) {
    return <DetailCard item={itemData.item} onPress={() => { }} style={styles.innerWrapper} event={true} />
  }


  return (

    <SafeAreaView style={styles.container}>

      {!loading ? (
        <FlatList
          data={events}
          renderItem={renderCharacter}
          keyExtractor={(item, index) => index.toString()}
          initialNumToRender={25}
          maxToRenderPerBatch={25}
          onEndReached={fetchData}
          onEndReachedThreshold={0.2}
        />
      ) :
        (
          <Spinner />
        )}

    </SafeAreaView>


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




