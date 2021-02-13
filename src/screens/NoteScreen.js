import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Kontak from '../components/Kontak'
import Messages from '../components/Messages'
import { warnaUtama } from '../utils/styles'

const NoteScreen = () => {
    return (
        <View style={styles.container}>
            <Kontak />
        </View>
    )
}

export default NoteScreen

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: warnaUtama }
})
