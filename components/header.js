import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.info}>
                    <Image
                        source={require('../assets/images/profile.jpg')}
                        style={styles.profileImage}
                    />
                    <View style={styles.headerText}>
                        <Text style={styles.welcome}>Welcome</Text>
                        <Text style={styles.name}>John Doe</Text>
                    </View>
                </View>
                <View style={styles.headersettings}>
                    <Icon name="cog" size={30} color="grey" onPress={() => console.log('Icon Proessed')} />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#F8F0E3',
    },
    header: {
        width: '100%',
        height: 100,
        backgroundColor: 'inherit',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
        position: 'relative',
        top: 30,
        left: 10,
    },
    info: {
        flexDirection: 'row',
        backgroundColor: '#F8F0E3',
        width: '70%',
        height: 100,
    },
    headerText: {
        position: 'relative',
        top: 40,
        left: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    welcome: {
        fontSize: 15,
        color: 'grey',
        fontWeight: 'bold',
    },
    headersettings: {
        position: 'relative',
        top: 40,
        right: 10,
        padding: 3,
        borderRadius: 9,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    }
});

