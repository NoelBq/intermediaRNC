import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/styles'

type Props = {
    data: object | any
}

const CharacterList: React.FC<Props> = ({ data }) => {
    console.log("THIS IS DATA PROP ITEMS")
    console.log(data.items)
    const dataItems = data.items
    return (
        <>

            {dataItems.map((element: any, index: any) => {
               return (
                    <View style={styles.listItem} key={index}>
                        <Text>{element.name}</Text>
                    </View>
                )
            })}
        </>


        // <>
        //     {dataItems.map(dataPoint: any)} => (
        //         <View style={styles.listItem} key={dataPoint}>
        //          <Text>{dataPoint.name}</Text>
        //      </View>
        //     )
        // </>
    )
}

export default CharacterList

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 30,
        marginVertical: 8,
        marginHorizontal: 15,
        borderBottomWidth: 1.5,
        borderBottomColor: Colors.primary500
    },
    listText: {
        color: '#444444',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400'
    }

})