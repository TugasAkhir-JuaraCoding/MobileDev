import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import botAvatar from "../../images/magurodev.png";
import { GiftedChat, InputToolbar, Message } from 'react-native-gifted-chat'
import Keterangan from '../Kontak/Keterangan';
import { Dialogflow_V2 } from 'react-native-dialogflow'

import { dialogflowConfig } from "../../env"

const BOT = {
    _id: 2,
    name: 'Mr.bot',
    avatar: ''
}

const renderInputToolbar = (props) => {
    return <InputToolbar {...props} containerStyle={styles.inputToolbar} />
}

class Messages extends Component {

    state = {
        messages: [{
            _id: 1,
            text: 'Hi',
            createdAt: new Date(),
            user: BOT
        }],
        id: 1,
        name: ''
    };

    componentDidMount() {
        Dialogflow_V2.setConfiguration(
            dialogflowConfig.client_email,
            dialogflowConfig.private_key,
            Dialogflow_V2.LANG_ENGLISH_US,
            dialogflowConfig.project_id
        )
    };

    handleGoogleResponse(result) {
        let text = result.queryResult.fulfillmentMessages[0].
            text.text[0];

        this.sendBotResponse(text);
    }

    sendBotResponse(text) {
        let msg = {
            _id: this.state.messages.length + 1,
            text,
            createdAt: new Date(),
            user: BOT
        }

        this.setState((previouseState) => ({
            messages: GiftedChat.append(previouseState.
                messages, [msg])
        }))
    }

    onSend(messages = []) {
        this.setState((previouseState) => ({
            messages: GiftedChat.append(previouseState.
                messages, messages)
        }))


        let message = messages[0].text;
        Dialogflow_V2.requestQuery(
            message,
            (result) => this.handleGoogleResponse(result),
            (error) => console.log(error)
        )

    }

    onQuickReply(quickReply) {
        this.setState((previouseState) => ({
            messages: GiftedChat.append(previouseState.
                messages, quickReply)
        }))

        let message = quickReply[0].value;
        Dialogflow_V2.requestQuery(
            message,
            (result) => this.handleGoogleResponse(result),
            (error) => console.log(error)
        )


    }

    render() {


        return (
            <>

                <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                    borderTopLeftRadius: 47,
                    borderTopRightRadius: 47,
                    display: 'flex',

                }}>

                    <View style={{ marginTop: 10, marginLeft: 20 }}>

                    </View>

                    <GiftedChat
                        messages={this.state.messages}
                        onSend={(e) => this.onSend(e)}
                        onQuickReply={(e) => this.onQuickReply({
                            e
                        })}
                        user={{ _id: 1 }}

                        alwaysShowSend={true}
                    />
                </View >
            </>

        )
    }
}

export default Messages

const styles = StyleSheet.create({

})
