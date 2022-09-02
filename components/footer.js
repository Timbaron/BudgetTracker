import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Footer() {
    return (
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
    )
}

const styles = StyleSheet.create({
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