import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native'
import React, { useContext, useLayoutEffect, useState, useEffect } from 'react'
import ItemList from '../components/characterDetails/ItemList';
import Subtitle from '../components/ui/Subtitle'
import Icon from '../components/ui/Icon'
import { loadCharacterById } from '../services/charactersService';
import { AxiosError } from 'axios'
import Spinner from '../components/ui/Spinner'

type CharacterProps = {
  route: any;
  navigation: any;
  image: any
}

const DATA = ["movie", "movie2, movie3, movie4"]

const CharacterScreen = ({ route, navigation }: CharacterProps) => {


  const [character, setCharacter]: any = useState({})
  const [loading, setLoading] = useState(true)

  const id = route.params.id

  useEffect(() => {
    (async function () {
      try {
        const response = await loadCharacterById(id);
        if (response.data.data.results.length) {
          setCharacter(response.data.data.results[0])
          setLoading(false)
        }

      } catch (error: unknown) {
        if (!(error instanceof AxiosError)) { throw error; }
        console.log(error.message)
      }

    })();
  }, [])


  function backHandler() {
    navigation.goBack()
  }

  useLayoutEffect(() => {
    const title = route.params.title
    navigation.setOptions({
      title: title,
      headerLeft: () => <Icon
        icon="close-outline"
        onPress={backHandler}
        size={28}
        color="white"
        style={styles.iconStyle}
      />


    })
  }, [navigation])

  return (
    <>
      {!loading ?
        (
          <ScrollView style={styles.wrapper}>

            <Image style={styles.image} source={{ uri: character.thumbnail.path + '.' + character.thumbnail.extension }}/>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{character.description == "" ? "No description available for character": character.description}</Text>
            </View>
            <View>
              <Subtitle>Appears in these comics</Subtitle>
              <ItemList data={character.comics}></ItemList>
            </View>
          </ScrollView>
        ) :
        (
         <Spinner/>
        )


      }

    </>

  )
}

export default CharacterScreen

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 350
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#898AA6'
  },
  subtitleContainer: {
    borderBottomColor: '#C9BBCF',
    borderBottomWidth: 2,
    marginVertical: 4,
    padding: 6,
  },
  text: {
    fontSize: 15, 
    alignSelf: 'center'
  },

  textContainer: {
    marginTop: 20,
    marginBottom: 15,
    marginHorizontal: 20,
    padding: 20
  },
  iconStyle: {
    marginLeft: 14,
    fontSize: 25

  }

})