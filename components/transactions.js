import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'
import Item from './item'
import { LinearGradient } from 'expo-linear-gradient';


export default function Transactions() {
    const DATA = [
        {
            id: 1,
            name: 'Furniture',
            price: 100.00,
            type: '+',
            day: 'Today',
            image: require('../assets/images/chair.jpeg'),
        },
        {
            id: 2,
            name: 'Clothing',
            price: 240.00,
            type: '-',
            day: 'Yesterday',
            image: require('../assets/images/cloth.jpeg'),
        },
        {
            id: 3,
            name: 'Electronics',
            price: 543.00,
            type: '-',
            day: 'Today',
            image: require('../assets/images/elec.jpeg'),
        },
        {
            id: 4,
            name: 'Books',
            price: 50.00,
            type: '+',
            day: 'Yesterday',
            image: require('../assets/images/book.jpeg'),
        },
        {
            id: 5,
            name: 'Sports',
            price: 244.00,
            type: '-',
            day: 'Today',
            image: require('../assets/images/sport.jpeg'),
        },
        {
            id: 6,
            name: 'Food',
            price: 412.00,
            type: '+',
            day: 'Today',
            image: require('../assets/images/food.jpeg'),
        },
        {
            id: 7,
            name: 'Travel',
            price: 1000.00,
            type: '-',
            day: 'Yesterday',
            image: require('../assets/images/travel.jpeg'),
        },
    ]
    return (
        <>
            <SafeAreaView style={styles.container}>
                <FlatList data={DATA} renderItem={Item} keyExtractor={item => item.id} />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});