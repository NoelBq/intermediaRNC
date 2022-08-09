import { StyleSheet, SafeAreaView, FlatList,  } from 'react-native'
import React, { useState, useEffect } from 'react'
import { loadCharacters } from '../services/charactersService'
import DetailCard from '../components/DetailCard'
import { Colors } from '../constants/styles'
import { AxiosError } from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { SET_CHARACTERS } from '../store/redux/characters'
import Spinner from '../components/ui/Spinner'

const LIMIT:number = 15;


const CharactersScreen = ({ navigation }:any) => {
  
  const dispatch = useDispatch()
  const [offset, setOffset] = useState(1);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async function () {
      try {
        const response = await loadCharacters();
        dispatch(SET_CHARACTERS(response.data.data.results));
        setLoading(false)
      } catch (error: unknown) {
        if (!(error instanceof AxiosError)) { throw error; }
        console.log(error.message)
      }
    })();
  }, [])

  const fetchData = async () => { 
    const response = await loadCharacters(15, offset * LIMIT);
    dispatch(SET_CHARACTERS(response.data.data.results));
    setOffset(offset + 1);
  }


  function renderCharacter(itemData: { item: { name: string, image: string, id: string, thumbnail:  any, title: string, start: any }}) {
    function pressHandler() {

      navigation.navigate('Character', {
        title: itemData.item.name,
        id: itemData.item.id
      })
    }
    return <DetailCard item={itemData.item} onPress={pressHandler} style={styles.innerWrapper} event={false}/>
  }

  const characters = useSelector((state:any) => state.characters)

  return (
    <SafeAreaView style={styles.container}>
      {!loading ? (
              <FlatList
              data={characters}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderCharacter}
              initialNumToRender={15}
              maxToRenderPerBatch={15}
              onEndReached={fetchData}
              onEndReachedThreshold={0.2}
              horizontal={false}
            />
      ): (
        <Spinner/>
      )}

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