import { StyleSheet, Text, View, Pressable, ImageBackground, Image, Dimensions } from 'react-native'
import React from 'react'

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

type Props = {
    item: {
     image: string, 
     name: string, 
     thumbnail: any 
    }
    onPress: () => void,
    style: object | any
}


const DetailCard: React.FC<Props> = ({ item, onPress, style}) => {

    return (
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
                            <Text style={styles.title}>{item.name}</Text>
                        </View>
                    </View>
                </Pressable>
            </View>
        </View>
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
        // marginTop: 10,
        paddingVertical: 20,
        backgroundColor: '#fff',
        flexDirection: 'row', 
        width: 400, 
        marginHorizontal: 10
    },
    coverImage: {
        width: 100,
        height: 100,
    },
    metaInfo: {
        marginLeft: 10
    },
    title: {
        fontSize: 18,
        width: 200,
        padding: 10
    }
})