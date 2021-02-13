import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Input from '../components/Input'
import Messages from '../components/Messages'
import { warnaUtama } from '../utils/styles'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Messages />

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: warnaUtama
    }
})
