import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { warnaUtama } from '../../utils/styles'

const Keterangan = ({ keterangan }) => {
    return (
        <View style={{ display: 'flex', marginBottom: 10, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <Text style={{ fontSize: 21, fontWeight: 'bold', color: warnaUtama }}>
                {keterangan}
            </Text>
        </View>
    )
}

export default Keterangan

const styles = StyleSheet.create({

})
