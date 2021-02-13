import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
    ModalPortal,
    Modal, SlideAnimation,
    ModalContent, ModalFooter, ModalButton
} from 'react-native-modals';

const Modals = () => {
    return (
        <View>
            <Modal
                visible={false}
                footer={
                    <ModalFooter>
                        <ModalButton
                            text="CANCEL"
                            onPress={() => { }}
                        />
                        <ModalButton
                            text="OK"
                            onPress={() => { }}
                        />
                    </ModalFooter>
                }
            >
                <ModalContent>

                </ModalContent>
            </Modal>
        </View>
    )
}

export default Modals

const styles = StyleSheet.create({})
