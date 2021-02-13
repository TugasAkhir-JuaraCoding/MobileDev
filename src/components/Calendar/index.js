import React, { useState } from 'react'
import { StyleSheet, Text, View, Clipboard, Button, TextInput, TouchableOpacity } from 'react-native';
import { Calendar as Maguro, CalendarList, Agenda } from 'react-native-calendars';
import { warnaUtama } from '../../utils/styles';

const Item = {
    name: '',
    cookies: false
}



const Calendar = () => {

    const [items, setItems] = useState("");
    const [text, setText] = useState("");
    const [kontent, setKontent] = useState("");

    const renderItem = (item) => {
        return (
            <View>
                <Text>{item.name}</Text>
                <Text>{item.cookies}</Text>
            </View>
        )
    }

    const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'green' };
    const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
    const workout = { key: 'workout', color: 'green' };
    const [copiedText, setCopiedText] = useState('');

    let keyword = 'Magurodev Tolong Catat ya #Dating !02-15-2021 @03:20 ##Test Development'

    const copyToClipboard = () => {
        Clipboard.setString(keyword)
    }

    const fetchCopiedText = async () => {
        const text = await Clipboard.getString()
        setCopiedText(text)
    }
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{ fontSize: 23, fontWeight: 'bold', color: warnaUtama }}>
                    Template Catatan dan jadwal
                </Text>
            </View>
            <>
                <TouchableOpacity onPress={() => copyToClipboard()}
                    style={styles.carding}>
                    <Text style={{ color: 'white', fontSize: 19 }}>
                        {keyword}
                    </Text>
                </TouchableOpacity>
            </>

            <Maguro
                style={{ width: '100%' }}
                onDayPress={(day) => { console.log('selected day', day) }}
                markedDates={{
                    '2021-02-19': { dots: [], selected: true, selectedColor: warnaUtama },
                    '2021-02-14': { dots: [vacation, massage, workout], selected: true, selectedColor: 'salmon' },
                    '2021-02-18': { dots: [massage, workout], disabled: true }
                }}
                markingType={'multi-dot'}
            />
        </View>
    )
}

export default Calendar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 47,
        borderBottomLeftRadius: 47,
        borderBottomRightRadius: 47,
        borderTopRightRadius: 47,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: { display: 'flex', flex: 0.1, marginBottom: 30, marginTop: -10 },
    carding: {
        width: 300, padding: 20,
        paddingVertical: 16, maxHeight: 120,
        borderRadius: 20, flex: 0.5,
        backgroundColor: warnaUtama
    }

})
