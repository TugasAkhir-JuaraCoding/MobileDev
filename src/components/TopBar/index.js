import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Modal, ModalContent } from 'react-native-modals';
import { warnaUtama } from '../../utils/styles'
const TopBar = () => {

    const [visible, setVisible] = useState(false)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>&lt;Magurodev /&gt;</Text>

            {/* //profile card */}
            <TouchableOpacity style={styles.profile}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Text>Teguhw...</Text>
            </TouchableOpacity>

        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: warnaUtama,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    title: {
        marginLeft: 11,
        marginTop: 4,
        fontWeight: 'bold',
        fontSize: 21,
        color: 'white',
        paddingVertical: 12,
        marginRight: 140
    },
    profile: {
        paddingVertical: 12
    },
    tinyLogo: {
        width: 30,
        height: 30,
        borderRadius: 30,
        paddingVertical: 12
    },
})
