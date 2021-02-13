import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Calendar from '../components/Calendar'
import { warnaUtama } from '../utils/styles'

const CalendarScreen = () => {
    return (
        <View style={styles.container}>
            <Calendar />
        </View>
    )
}

export default CalendarScreen

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: warnaUtama }
})
