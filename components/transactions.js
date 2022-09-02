import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'
import Item from './item'
import Icon from 'react-native-vector-icons/FontAwesome';
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
            <View style={styles.options}>
                <View style={styles.option}>
                    <Icon name="houzz" size={30} color="grey" onPress={() => console.log('Icon Proessed')} />
                </View>
                <LinearGradient style={styles.optionsIcon} colors={['orange', 'purple', 'blue']}>
                    <Icon name="plus" size={30} color="white" onPress={() => console.log('Icon Plus Proessed')} />
                </LinearGradient>
                <View style={styles.option}>
                    <Icon name="area-chart" size={20} color="grey" onPress={() => console.log('Icon Exta Proessed')} />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    options: {
        height: 70,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'space-around',
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    optionsIcon: {
        backgroundColor: 'green',
        width: 70,
        height: 70,
        position: 'relative',
        top: -30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    option: {
        position: 'relative',
        top: 20,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    option3: {
        backgroundColor: 'blue',
        position: 'relative',
        top: -50,
    }
});