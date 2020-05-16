import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Header = props => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  headerTitle: {
    color: 'black',
    fontSize: 18
  }

})

export default Header
