import { StyleSheet, Text, View, Pressable, ImageBackground, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import ItemList from '../components/characterDetails/ItemList'
import { Ionicons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { Colors } from '../constants/styles'
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
                                        <Text style={styles.title}>{item.title}</Text>
                                        {
                                        (typeof item.start === 'string') ? (
                                            <Text style={styles.startDate}>
                                             {new Date(item.start.replace(/ /g,"T")).toDateString()}
                                            </Text>
                                        ) : (
                                            <Text style={styles.startDate}>No Start Date available</Text>
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
                                    {Object.keys(eventToLoad.comics.items).length > 0 ? (
                                        <ItemList data={eventToLoad.comics} />
                                    ): (<Text style={styles.templateText}> No commics to discuss available</Text>)}
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
                                        <Text style={styles.name}>{item.name}</Text>
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
        alignItems: 'center',
        alignSelf: 'center'
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
        fontSize: 20,
        width: 200,
        padding: 10,
        letterSpacing: 2
    },
    name: {
        fontSize: 25,
        width: 200,
        padding: 5,
        paddingLeft: 10,
        letterSpacing: 2,
        textTransform: 'uppercase'
    },
    arrow: {
        fontSize: 35,
        padding: 10
    }, 
    startDate: {
        alignSelf: 'flex-start',
        paddingLeft: 12,
    },
    templateText: {
        fontSize: 12, 
        fontWeight: 'bold',
        textAlign: 'center',
        color:  Colors.primary800,
        textTransform: 'uppercase',
        letterSpacing: 3,
        paddingBottom: 10
    
    }

})