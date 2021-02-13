import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { warnaUtama } from '../../utils/styles'

const UserLain = ({ nama }) => {
    return (
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
                        {nama}
                    </Text>
                </View>
            </View>
        </>
    )
}

export default UserLain

const styles = StyleSheet.create({
    profile: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: warnaUtama,
        padding: 12,
        borderRadius: 18,
        alignItems: 'flex-start',
        marginBottom: 10,
        width: '80%'
    },
    profileCard: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 8,
        paddingHorizontal: 10
    },
    tinyLogo: {
        width: 30,
        height: 30,
        borderRadius: 30,
    },

    profileName: {
        marginLeft: 8,
        fontWeight: 'bold',
        fontSize: 19,
        alignItems: 'center',
        color: 'whitesmoke'
    }
})

