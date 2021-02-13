import React, { useState } from 'react'
import { StyleSheet, Text, View, Clipboard, Button, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Calendar as Maguro, CalendarList, Agenda } from 'react-native-calendars';
import { warnaUtama } from '../../utils/styles';

const Item = {
    name: '',
    cookies: false
}

const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'green' };
const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
const workout = { key: 'workout', color: 'green', selectedDotColor: 'salmon' };

const acara = {
    title: 'Meeting',
    subTitle: 'ssd',
    tanggal: '2021-02-14',
    jam: '08.99'
}



const getEvent = {
    '2021-02-19': { dots: [massage], selected: true, selectedColor: warnaUtama },
    '2021-02-14': { dots: [vacation], selected: true, selectedColor: 'salmon' },
    '2021-02-18': { dots: [massage, workout], selected: true, disabled: true }
}


const loopingSingelTanggal = (myObject, e) => {
    let obj = myObject;

    let firstKey = Object.keys(obj).map(a => ({ [a]: obj[a] })); // "plainKey"
    let dataTanggal;
    let budi = []
    for (let i = 0; i < firstKey.length; i++) {
        if (Object.keys(obj)[i] === e) {
            console.log('ytyi', Object.values(obj)[i])
            createTwoButtonAlert(Object.keys(obj)[i], Object.values(obj)[i])
        }

    }



    let [key, value] = Object.entries(obj)[1]; // ["plainKey", "plain value"]

    console.log(key); // "plainKey"
    console.log(value); // "plain value"

    return dataTanggal
}

const klikTanggal = (e) => {
    console.log('sdsd', e.dateString)
    loopingSingelTanggal(getEvent, e.dateString)
    console.log('as', loopingSingelTanggal(getEvent))
}

const createTwoButtonAlert = (tanggal, acara) =>
    Alert.alert(
        "Acara Ku",
        "Judul: " + JSON.stringify(acara.title) +
        "\nTanggal: " + tanggal + "" +
        "\nJam: " + JSON.stringify(acara.jam) +
        "\nAcara: " + acara.dots[0].key,
        [

            { text: "Back", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
    );


const Calendar = () => {
    const [judulAcara, setJudulAcara] = useState('')
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
                onDayPress={e => klikTanggal(e)}
                markedDates={getEvent}
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
