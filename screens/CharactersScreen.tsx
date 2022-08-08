import { StyleSheet, Text, View, SafeAreaView, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { loadCharacters } from '../services/charactersService'
import DetailCard from '../components/DetailCard'
import { Colors } from '../constants/styles'
import { AxiosError } from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { SET_CHARACTERS } from '../store/redux/characters'

import uuid from 'react-native-uuid';


const CharactersScreen = ({ navigation }:any) => {
  const dispatch = useDispatch()
  const [ loading, setLoading] = useState(true)

  useEffect(() => {
    (async function () {
      try {
        const response = await loadCharacters();
        // console.log(response.data.data.results);
        // dispatch({type: PURGE, key: 'characters'});
        dispatch(SET_CHARACTERS(response.data.data.results));
      } catch (error: unknown) {
        if (!(error instanceof AxiosError)) { throw error; }
        console.log(error.message)
      }

    })();
  }, [])


  function renderCharacter(itemData: { item: { name: string, image: string, id: string, thumbnail:  any } }) {
    function pressHandler() {

      navigation.navigate('Character', {
        title: itemData.item.name,
        id: itemData.item.id
      })
    }
    return <DetailCard item={itemData.item} onPress={pressHandler} style={styles.innerWrapper} />
  }

  const characters = useSelector((state:any) => state.characters)

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCharacter}
        initialNumToRender={15}
        maxToRenderPerBatch={15}
        directionalLockEnabled={true}
        horizontal={false}
        updateCellsBatchingPeriod={20}
      />
    </SafeAreaView>


  )
}

export default CharactersScreen

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
  },
});