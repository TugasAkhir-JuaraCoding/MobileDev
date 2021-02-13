import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { warnaUtama } from '../../utils/styles'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import UserLain from './UserLain'
import Keterangan from './Keterangan'

const Kontak = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            borderBottomLeftRadius: 47,
            borderTopLeftRadius: 47,
            borderBottomRightRadius: 47,
            borderTopRightRadius: 47,
            display: 'flex',
            alignItems: 'center',
        }}>

            <>
                <View style={{ marginTop: 40 }}>
                    <Text style={styles.magurodev}>
                        Member Magurodev
                    </Text>
                </View>
                <>
                    <View style={styles.profile}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: 'https://reactnative.dev/img/tiny_logo.png',
                            }}
                        />
                        <View style={styles.profileCard}>
                            <Text style={styles.profileName}>
                                Teguh Muhammad Harits
                            </Text>
                        </View>
                    </View>
                </>

                <Keterangan keterangan="user lain" />
                <UserLain nama='Jazrel' />
                <UserLain nama='Muhammad Fauzan' />
            </>

        </View>
    )
}

export default Kontak

const styles = StyleSheet.create({
    profile: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: warnaUtama,
        padding: 12,
        borderRadius: 21,
        alignItems: 'flex-start',
        marginBottom: 10, width: '80%'
    },
    profileCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        paddingHorizontal: 10
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },

    profileName: {
        marginLeft: 8,
        fontWeight: 'bold',
        fontSize: 21,
        alignItems: 'center',
        color: 'whitesmoke'
    },
    magurodev: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: warnaUtama }
})
