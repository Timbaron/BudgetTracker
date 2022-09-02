import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Account() {
    return (
        <LinearGradient
            // Button Linear Gradient
            colors={['blue', 'pink', 'purple', 'violet', 'orange']}
            style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.text}>Total Balance</Text>
                <Text style={styles.balance}>$1000.00</Text>
            </View>
            <View style={styles.info}>
                <View style={styles.income}>
                    <View style={styles.Icon}>
                        <Icon name="arrow-up" size={20} color="green" onPress={() => console.log('Icon Proessed')} />
                    </View>
                    <View style={styles.headerText}>
                        <Text style={styles.incomeText}>Income</Text>
                        <Text style={styles.name}>$2.500.00</Text>
                    </View>
                </View>
                <View style={styles.income}>
                    <View style={styles.Icon}>
                        <Icon name="arrow-down" size={20} color="red" onPress={() => console.log('Icon Proessed')} />
                    </View>
                    <View style={styles.headerText}>
                        <Text style={styles.incomeText}>Expenses</Text>
                        <Text style={styles.name}>$800.00</Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: '90%',
        height: 200,
        position: 'relative',
        top: 10,
        left: 20,
        borderRadius: 25,
        elevation: 10,
        shadowColor: '#171717',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        position: 'relative',
        top: 30,
        justifyContent: 'center',
    },
    balance: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        position: 'relative',
        top: 30,
        justifyContent: 'center',
    },
    info: {
        flexDirection: 'row',
        position: 'relative',
        top: 60,
    },
    income: {
        width: '50%',
        height: 50,
        backgroundColor: 'transparent',
        padding: 10,
        flexDirection: 'row',
    },
    Icon: {
        padding: 3,
        borderRadius: 50,
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginLeft: 10
    },
    headerText: {
        position: 'relative',
        top: -9,
        left: 10,
        color: 'white',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    incomeText: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
})
