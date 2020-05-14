import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import Login from './components/login'

export default function App () {
  return (
    <View style={styles.screen}>
      <Login />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})
