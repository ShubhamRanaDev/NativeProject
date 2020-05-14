import React from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import Header from './Header'

const Login = props => {
  return (
    <View>
      <Header title='Welcome to WeatherApp' />
      <View style={styles.loginContainer}>
        <Text style={styles.text}>Login</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Username' />
          <TextInput style={styles.input} placeholder='Password' />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='RESET' />
            </View>
            <View style={styles.button}>
              <Button title='SIGN IN' />
            </View>
          </View>
          <View style={styles.registerContainer}>
            <View style={styles.registerText}>
              <Button title='Sign Up' />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30
  },
  text: {
    fontSize: 20
  },
  inputContainer: {
    width: '80%',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 6,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'

  },
  input: {
    width: '80%',
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10
  },
  button: {
    width: '35%'
  },
  registerContainer: {
    width: '80%',
    alignItems: 'flex-end',
    marginVertical: 20
  },
  registerText: {
    width: '40%',
    textAlign: 'center'
  }
})

export default Login
