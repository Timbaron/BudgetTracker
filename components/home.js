import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Account from './account';
import Header from './header';

export default function Home() {
    return (
        <>
            <Header />
            <Account />
            <View style={styles.transactionText}>
                <Text style={styles.transaction}>Transactions</Text>
                <Text style={styles.viewAll}>View All</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    transactionText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginLeft: '5%',
        marginTop: '6%',
    },
    transaction: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#171717',
    },
    viewAll: {
        fontSize: 15,
        color: 'grey',
    }
})

