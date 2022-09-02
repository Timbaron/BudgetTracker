import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Item({ item }) {
  return (
    <View style={styles.item}>
      <View style={styles.LHS}>
        <Image
          source={item.image}
          style={styles.TransactionImage}
        />
        <View style={styles.TransactionText}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </View>
      <View style={styles.RHS}>
        <Text style={styles.TransactionPrice}>{item.type}${item.price}</Text>
        <Text style={styles.TransactionDay}>{item.day}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    // padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    borderRadius: 20,
    flexDirection: 'row',
    height: 80,
  },
  title: {
    fontSize: 32,
  },
  TransactionText: {
    position: 'relative',
    top: 25,
    left: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  TransactionImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'relative',
    top: 15,
    left: 20,
  },
  LHS: {
    flexDirection: 'row',
  },
  RHS: {
    position: 'relative',
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  TransactionPrice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  TransactionDay: {
    fontSize: 15,
    color: 'grey',
  }
})