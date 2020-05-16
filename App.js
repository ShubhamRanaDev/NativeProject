import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import Login from './components/login'
import Register from './components/register'

export default function App () {
  return (
    <View style={styles.screen}>
      {/* <Login /> */}
      <Register />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})
