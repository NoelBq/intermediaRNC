import { StyleSheet, Text, View, Pressable, ImageBackground, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import ItemList from '../components/characterDetails/ItemList'
import { Ionicons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { loadEventById, loadEventsComics } from '../services/eventsServices'
import { AxiosError } from 'axios'
import Subtitle from '../components/ui/Subtitle'
import events from '../store/redux/events'

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height
type Props = {
    item: {
        id: string,
        image: string,
        name: string,
        thumbnail: any,
        title: string,
        start: any
    }
    onPress: () => void,
    style: object | any,
    event: boolean,

}


const DetailCard: React.FC<Props> = ({ item, onPress, style, event }) => {

    const [eventToLoad, setEventToLoad] = useState<any>({})
    const [displayList, setDisplayList] = useState(false)
    const [loading, setLoading] = useState(false)
    const id = item.id
  

    const eventsFromStore = useSelector((state: any) => state.events)
    const eventById = eventsFromStore.find((event: any) => event.id === id)

    useEffect(() => {
        setEventToLoad(eventById)
    }, [])

    function displayListHandler() {
        !displayList ? setDisplayList(true) : setDisplayList(false)
    }
    
    return (
        <>
          
            {event ? (
                <View style={styles.wrapper}>
                    <View style={style}>
                        <Pressable
                            android_ripple={{ color: '#cccc' }}
                            style={styles.pressableItem}
                            onPress={onPress}
                        >
                            <View style={styles.listItem}>
                                <Image
                                    source={{ uri: item.thumbnail.path + '.' + item.thumbnail.extension }}
                                    style={styles.coverImage}
                                />
                                <View style={styles.metaInfo}>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.title}>{item.name || item.title}</Text>
                                        {
                                        (typeof item.start === 'string') ? (
                                            <Text >
                                             {new Date(item.start.replace(/ /g,"T")).toDateString()}
                                            </Text>
                                        ) : (
                                            <Text>No Start Date</Text>
                                        )
                                        }
                                 
                                    </View>
                                    <Pressable onPress={displayListHandler}>
                                        <Ionicons style={styles.arrow} name={!displayList ? "chevron-down-outline" : "chevron-up-outline"} />
                                    </Pressable>
                                </View>
                            </View>
                            {displayList && (
                                <>
                                    <Subtitle>Comics to discuss</Subtitle>
                                    <ItemList data={eventToLoad.comics} />
                                </>

                            )}
                        </Pressable>
                    </View>
                </View>
            ) :
                (
                    <View style={styles.wrapper}>
                        <View style={style}>
                            <Pressable
                                android_ripple={{ color: '#cccc' }}
                                style={styles.pressableItem}
                                onPress={onPress}
                            >
                                <View style={styles.listItem}>
                                    <Image
                                        source={{ uri: item.thumbnail.path + '.' + item.thumbnail.extension }}
                                        style={styles.coverImage}
                                    />
                                    <View style={styles.metaInfo}>
                                        <Text style={styles.title}>{item.name || item.title}</Text>
                                    </View>

                                </View>
                            </Pressable>
                        </View>
                    </View>
                )
            }
        </>


    )
}

export default DetailCard

const styles = StyleSheet.create({

    wrapper: {
        flexDirection: 'row',
        marginTop: 10
    },

    imageText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        position: 'relative',
        top: 80,
    },

    textContainer: {
        alignItems: 'center'
    },
    pressableItem: {
        elevation: 10
    },

    text: {
        fontSize: 20,
        color: '#101010',
        marginTop: 60,
        fontWeight: '700'
    },

    listItem: {
        paddingVertical: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: 380,
        marginHorizontal: 10
    },
    coverImage: {
        width: 100,
        height: 100,
    },
    metaInfo: {
        marginLeft: 10,
        flexDirection: 'row'
    },
    title: {
        fontSize: 18,
        width: 200,
        padding: 10
    },
    arrow: {
        fontSize: 35,
        padding: 10
    }

})