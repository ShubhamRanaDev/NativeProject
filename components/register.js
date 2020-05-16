import React from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import Header from './Header'

const Register = props => {
  return (
      <View>
        <Header title="Weather App" />
        <View style={styles.loginContainer}>
        <Text style={styles.intro}>
                    Register
                </Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Email" style={styles.input}/>
                <TextInput placeholder="Username" style={styles.input}/>
                <TextInput placeholder="Password" style={styles.input}/>
                <TextInput placeholder="Confirm password" style={styles.input}/>

                <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='Reset' />
            </View>
            <View style={styles.button}>
              <Button title='Register' />
            </View>
          </View>
          <View style={styles.registerContainer}>
            <View style={styles.registerText}>
              <Button title='Login In' />
            </View>
          </View>
            </View>
        </View>
      </View>
  )}

  const styles = StyleSheet.create({
      intro:{
          textAlign:"center",
          padding:10,
          fontSize:30
      },
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
  export default Register