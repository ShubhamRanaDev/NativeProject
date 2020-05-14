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
    height: 90,
    backgroundColor: '#ffa07a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 36
  },
  headerTitle: {
    color: 'black',
    fontSize: 18

  }

})

export default Header
