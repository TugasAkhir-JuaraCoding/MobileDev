import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Input = ({ inputMessage, onSendPress, setMessage }) => {

    const klik = () => {
        console.log('hallo')
    }

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <TextInput
                placeholder="Som text"
                value={inputMessage}
                onChangeText={setMessage}
            />
            <TouchableOpacity onPress={klik}>
                <View style={{ backgroundColor: 'red', padding: 5 }}>
                    <Text style={{}}>Kirim</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default Input

const styles = StyleSheet.create({})
