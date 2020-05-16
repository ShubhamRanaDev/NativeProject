import React from 'react'
import {StyleSheet, View, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Login from './components/login'
import Register from './components/register'
import Card from './components/Card'

export default function App() {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
            <Card style={styles.MainContainer}>
                {/*<Login/>*/}
                <Register />
            </Card>

        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    MainContainer: {
        width: '80%'
    }
})
